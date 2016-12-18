angular.module('homeroomApp', ["firebase"])
    .controller('homeroomController', function($firebaseObject, $scope) {

        var ref = firebase.database().ref();
        var obj = $firebaseObject(ref);
        var database = firebase.database();

        obj.$bindTo($scope, "data").then(function() {
            console.log($scope.data); // { foo: "bar" }
            //$scope.data.messages = [{ msg: "test", usr: "me" }]; // will be saved to the database

            //ref.set({ foo: "baz" }); // this would update the database and $scope.data
        });

        $scope.test = "itworks";
        $scope.writtenMessage = "";
        $scope.messages = [];
        $scope.sendMessage = function() {
            var message = {
                msg: $scope.writtenMessage,
                usr: "test"
            }
            $scope.data.messages.push(message);
            $scope.writtenMessage = "";
        }

    });