
const http = require('http');
require('dotenv').config();
const { response } = require('express');
const User = require('../database/userSchema');
const jwt = require('jsonwebtoken');
const mailgun = require("mailgun-js");
const DOMAIN = 'sandbox3d611fb4d4a5485badf9a993183aebec.mailgun.org';
const mg = mailgun({apiKey: process.env.MAILGUN_APIKEY, domain: DOMAIN});
const { userRegistrationValidation, userLoginValidation } = require('../validation/emailLoginValidate');
const bcrypt = require('bcrypt');

const generateToken =  (id) => {
    return (
        jwt.sign({id}, process.env.JWT_AUTH_TOKEN_SECRET, {expiresIn: '1d'})
    );
}

exports.signup = async (req, res) => {
    const { error } = userRegistrationValidation(req.body);
    if (error) {
        return res.status(400).send({error, message: "Validation error"});
    }
    User.findOne({email: req.body.email}, async (error, emailExists) => {
        if(emailExists) {
                    return res.status(400).json({error: "Email already exists"});
                  }

                  const cryptedPassword = await bcrypt.hash(req.body.password, 10);

                  const newUser = new User({name: req.body.name,
                      email: req.body.email,
                      password: cryptedPassword});
                  
                  await newUser.save((err) => {
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
              
                  res.cookie('jwt', generateToken(req.body._id));    
    
                });
              


};

exports.logout = (req, res) => {
    res.cookie('jwt', '', {maxAge: 1});
    res.status(200).json({status: "logged out"});
};


exports.signin = async (req, res) => {
   const { error } = userLoginValidation(req.body);

    if (error) {
        return res.status(400).send(error);
    }

    const user = await User.findOne({email: req.body.email});
    if (!user) {
        return res.status(400).send("Sorry, the email address is incorrect");
    }


    const validUserPassword = await bcrypt.compare(
        req.body.password, user.password
    );
    if (!validUserPassword) {
        return res.status(400).send("Sorry, the password is incorrect");
    };

    res.cookie('jwt', generateToken(user._id));
    res.json({
                          _id: user._id,
                          name: user.name,
                          email: user.email,
                

                      });
    
};




exports.homePage = async (req, res) => {
    const {_id, name, email} = await User.findById(req.user.id);

    res.status(200).json({
        _id,
        name,
        email
    });
}












// exports.signup = (req, res) => {
//     console.log(req.body);
//     const {name, email, password} = req.body;
//     User.findOne({email}).exec((err, user) => {
//         if(user) {
//             return res.status(400).json({error: "user with this email already exists"});
//         }
//         let newUser = new User({name, email, password});
//         newUser.save((err) => {
//             if(err) {
//                 console.log("signup error ", err);
//                 return res.status(400).json({error: err});
//         }
//         return res.json("success");
//     });
//     });

// };
