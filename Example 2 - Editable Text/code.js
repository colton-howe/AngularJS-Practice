var app = angular.module('myApp', []);
app.controller('myController', function($scope){
    $scope.editText = "Edit me";
    $scope.viewable = false;

    $scope.toggleVisibility = function(){
        $scope.viewable = !$scope.viewable;
    }

});