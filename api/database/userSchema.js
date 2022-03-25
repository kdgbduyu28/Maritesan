const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        max: 64
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        min: 6,
        lowercase: true
    },
    password: {
        type: String,
        min: 4
    },
    oauthID: {
        type: Number
    }

}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);