const mongoose = require('mongoose');


const postsSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        max: 64
    },
    email: {
        type: String,
        trim: true,
        required: true,
        min: 6,
        lowercase: true
    },
    post: {
        type: String,
    }



}, {timestamps: true});

module.exports = mongoose.model('Post', postsSchema);