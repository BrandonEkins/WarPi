//var express = require('express');
//var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//     res.sendFile('index.html', { root: 'public' });
// });

var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
//var firebase = require('firebase');
app.use(express.static('public'));
// var config = {
//     apiKey: "AIzaSyDQnbQNioVr6yJUCqwFioOjqDgj0qjd69w",
//     authDomain: "warpi-c2a8c.firebaseapp.com",
//     databaseURL: "https://warpi-c2a8c.firebaseio.com",
//     storageBucket: "warpi-c2a8c.appspot.com",
//     messagingSenderId: "586364425770"
// };
// firebase.initializeApp(config);
//var database = firebase.database();
app.get('/', function(req, res, next) {
    console.log(req);
    res.sendFile('login.html', { root: 'public' });
});

// io.on('connection', function(socket) {
//     console.log('a user connected');
//     socket.on('chat message', function(msg) {
//         console.log('Chat message: ' + msg);
//         io.emit('chat message', msg);
//     });
// });
http.listen(3000, function() {
    console.log('listening on *:3000');
});
module.exports = app;