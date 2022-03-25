const Post = require('../database/postsSchema');

module.exports = (io) => {

const messages = Post.find({});

io.on('connection', async socket => {
    
socket.emit('history',(
   await Post.find({})
));

socket.on('disconnect', ()=> {
    console.log("socket disconnected");
});

});

Post.watch().on('change', async change => {
    const messages = await Post.find({});
    io.emit("history", messages);
});



};   


// console.log("triggered post watch");
//     const messages = await Post.find({});
//     change.emit("history", messages);