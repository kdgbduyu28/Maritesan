const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
require('dotenv').config();
const User = require('../database/userSchema');


const protect = async (req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            // obtain token from header
            token = req.headers.authorization.split(' ')[1];
            console.log(token);
            const decoded = jwt.verify(token, process.env.JWT_AUTH_TOKEN_SECRET);
            req.user = await User.findById(decoded.id).select('-password');
            next();
        } catch(err) {
            console.log(err);
            res.status(401).send({message: "Login Unauthorized"})
        }
    }

    if(!token) {
        res.status(401).send({message: "Login Unsuccessful, no token"});
    }


};

module.exports = { protect }

