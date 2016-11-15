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
var shuffle = require('shuffle-list');
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

function CreateDeck() {
    var deck = [];
    var Blankcard = {
        suit: "",
        number: "",
        img: "" //for this make img files that are Spades1...Hearts13 then it can programaticly load them
    }
    var suits = ["Spades", "Clubs", "Diamonds", "Hearts"];

    for (var i = 1; i < 14; i++) {
        for (var s = 0; s < suits.length; s++) {
            var card = { suit: suits[s], number: i, img: suits[s] + i + '.jpg' }
            deck.push(card)

        }
    }
    console.log(deck);
    deck = shuffle(deck);
    return deck;
}
CreateDeck();
http.listen(3000, function() {
    console.log('listening on *:3000');
});
module.exports = app;