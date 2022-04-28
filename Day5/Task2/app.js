const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {
    Server
} = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/chat.html');
});

io.on('connection', (socket) => {
   
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg); 
    });
});

server.listen(4000, () => {
    console.log('listening on *:4000');
});