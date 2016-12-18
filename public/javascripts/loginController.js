angular.module('loginApp', ["firebase"])
    .controller('loginController', function($firebaseAuth, $firebaseObject, $scope) {
        var lg = this;
        var auth = $firebaseAuth();
        auth.signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    });