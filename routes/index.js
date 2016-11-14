//var express = require('express');
//var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//     res.sendFile('index.html', { root: 'public' });
// });

var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io').listen(http);

app.use(express.static('public'));

app.get('/', function(req, res, next) {
    res.sendFile('index.html', { root: 'public' });
});

io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('chat message', function(msg) {
        console.log('Chat message: ' + msg);
        io.emit('chat message', msg);
    });
});

http.listen(3000, function() {
    console.log('listening on *:3000');
});
module.exports = app;