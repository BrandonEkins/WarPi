angular.module('homeroomApp', [])
    .controller('homeroomController', function() {
        var socket = io();
        var hr = this;
        hr.test = "itworks";
        hr.writtenMessage = "";
        hr.messages = [];
        hr.sendMessage = function() {
            socket.emit('chat message', hr.writtenMessage);
            hr.writtenMessage = "";
        }
        socket.on('chat message', function(msg) {
            hr.messages.push(msg);
        })

    });