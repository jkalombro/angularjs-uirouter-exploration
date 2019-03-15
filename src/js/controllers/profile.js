import app from '../app.js';

app.controller("profileController", ['$scope', function($scope){

    $scope.someActivity = "Nothing for now"
    console.log("This was executed!");
}]);