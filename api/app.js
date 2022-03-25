const http = require('http');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./database/dbConnect');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:3000"
    }
});
const userRoutes = require('./routes/userRoutes');
const postsRoutes = require('./routes/postsRoutes');
require('./middleware/postsSocket')(io);

app.use(express.json());
app.use(cors());


app.use('/', userRoutes);
app.use('/', postsRoutes);


server.listen(process.env.PORT_SOCKET, () => {
    console.log(`Socket server listening on port ${process.env.PORT_SOCKET}`);
});
app.listen(process.env.PORT_API, () => {
    console.log(`Server is running at port ${process.env.PORT_API}`);
});