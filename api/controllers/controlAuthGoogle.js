

require('dotenv').config();
const User = require('../database/userSchema');
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const jwt = require('jsonwebtoken');


const generateToken =  (id) => {
    return (
        jwt.sign({id}, process.env.JWT_AUTH_TOKEN_SECRET, {expiresIn: '1d'})
    );
}


exports.googlesignin =  (req, res) => {

    const {tokenId} = req.body;

    client.verifyIdToken({idToken: tokenId, audience: process.env.GOOGLE_CLIENT_ID})
    
    .then(async (response) => {
        const {email_verified, name, email} = response.getPayload();
    
        if (email_verified) {
            const user = await User.findOne({email: email});
            if (user) {
    
                return res.json({
                                      _id: user._id,
                                      name: user.name,
                                      email: user.email,

                            
            
                                  });

            }  else {
                const password = email+process.env.GOOGLE_CLIENT_SECRET;
                const newUser = new User({
                    name: name,
                    email: email,
                    password: password
                });
                newUser.save((err) => {
                    if(err) {
                        console.log("signup error ", err);
                        return res.status(400).json({error: err});
                }
                return res.json({
                    _id: newUser.id,
                    name: newUser.name,
                    email: newUser.email,
                    token: generateToken(newUser._id),

                });
            });

            }
        }
    

    });
};

