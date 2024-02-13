const express = require('express');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const router = require('./router');
const cors = require('cors');
io.on("connection", socket => {
    socket.on('joinGame', gameId => {
        socket.join(gameId);
        console.log('a user connected');
    })
});
app.use(cors());

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/', router);
http.listen(9999, () => {
    console.log('listening on *:9999');
});




