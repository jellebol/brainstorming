var brainstormingApp = angular.module('brainstormingApp', [
    'ngRoute'
]);

brainstormingApp.controller('mainCtrl', function($scope) {

    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
    console.log($scope.message);
});