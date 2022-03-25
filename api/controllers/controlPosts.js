

require('dotenv').config();
const Post = require('../database/postsSchema');
const User = require('../database/userSchema');
exports.newPost = async (req, res) => {

    const {email, post} = req.body;

    const foundUser = await User.findOne({email: email});
    if (foundUser) {
        const newpost = new Post({
            name: foundUser.name,
            email: foundUser.email,
            post: post
        });
        newpost.save((err) => {
            if (err) return res.status(400).json({message: "trigerring error", error: err});
            res.json({
                _id: newpost.id,
                name: newpost.name,
                email: newpost.email,
                post: newpost.post,
            });
        });
    }
};

exports.deletePost =  (req, res) => {
    const id = req.body.data;
    Post.findOneAndDelete({_id: id}, (err, doc) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`deleted post ${doc}`);
        }
    });
    console.log(id);
    res.json(id);
}

