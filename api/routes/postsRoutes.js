const express = require("express");
const router = express.Router();
const {protect} = require('../middleware/authMiddleware');


const {newPost, deletePost} = require("../controllers/controlPosts");


router.post('/api/newpost', newPost);
router.post('/api/deletepost', deletePost);

module.exports = router;
