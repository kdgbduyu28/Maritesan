
const fetch = require('cross-fetch');
require('dotenv').config();
const User = require('../database/userSchema');

const jwt = require('jsonwebtoken');


const generateToken =  (id) => {
    return (
        jwt.sign({id}, process.env.JWT_AUTH_TOKEN_SECRET, {expiresIn: '1d'})
    );
}


exports.facebooksignin =  (req, res) => {

    const {userID, accessToken} = req.body;

    const url = `https://graph.facebook.com/v13.0/${userID}/?fields=id,name,email&access_token=${accessToken}`;

    fetch(url)
    .then(res => res.json())
    .then(async response => {
        const {email, name} = response;

        const user = await User.findOne({email: email});
        if (user) {
            console.log("user already exists");
            return res.json({
                                  _id: user._id,
                                  name: user.name,
                                  email: user.email,
                        
        
                              });

        }  else {
            console.log("initiating registration");
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
    });






};

