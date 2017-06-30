var app = angular.module('myApp', []);
app.controller('myController', function($scope){
    $scope.total = 0;
    $scope.services = [
        {"service" : "Web Development",
         "price"   : 300,
         "active" : false },
        {"service" : "Design",
         "price"   : 400,
         "active" : false },
        {"service" : "Integration",
         "price"   : 250,
         "active" : false },
        {"service" : "Training",
         "price"   : 220,
         "active" : false }    
    ]

    $scope.toggle = function(service){
        service.active = !service.active;
        if(service.active){
            $scope.total = $scope.total + service.price;
        } else {
            $scope.total = $scope.total - service.price;
        }
    };
});