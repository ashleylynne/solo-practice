const { isObject } = require('util');

var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    console.log('a user connected');
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});