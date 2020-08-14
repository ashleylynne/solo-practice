const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.render('index.ejs');
});

io.sockets.on('connection', function(socket) {
    socket.on('username', function(username) {
        socket.username = username;
        io.emit('is_online', '🔵 <i>' + socket.username + ' join the chat..</i>');
    });

    socket.on('disconnect', function(username) {
        io.emit('is_online', '🔴 <i>' + socket.username + ' left the chat..</i>');
    })

    socket.on('chat_message', function(message) {
        io.emit('chat_message', '<strong>' + socket.username + '</strong>: ' + message);
    });

});

const server = http.listen(8080, function() {
    console.log('listening on *:8080');
});

// Based on this experience, you should now understand the basic of a chat application using Node.js and Socket.io. There are a lot of things you can do to improve this code e.g.:
// Add typing notification (someone is typing…)
// Add emoji or emoticon
// Saving it to the database
// Etc. The limit is your imagination.

// source: https://itnext.io/build-a-group-chat-app-in-30-lines-using-node-js-15bfe7a2417b