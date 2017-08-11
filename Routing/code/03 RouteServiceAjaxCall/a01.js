var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/calc', {
            templateUrl: 'calc.htm',
            controller: 'calculateCtrl'
        })
        .when('/calc2', {
            templateUrl: 'calc2.htm',
            controller: 'calculateCtrl2'
        })
        .when('/', {
            template: '<strong>Welcome to our page</strong><br><i>Please click left side Menu</i>'
        })
        .otherwise({
            template: '<strong>No content available</strong><br>Please click left side Menu'
        })
}]);

app.controller('calculateCtrl', ['$scope', 'dataProvider', function($scope, dataProvider) {
    $scope.a = 0;
    $scope.b = 0;
    $scope.doAdd = function() {
        dataProvider.add($scope.a, $scope.b)
            .then(function(result) {
                $scope.result = result;
            })

    }
}])

app.controller('calculateCtrl2', ['$scope', 'dataProvider', function($scope, dataProvider) {
    $scope.a = 0;
    $scope.b = 0;
    $scope.doMultiply = function() {
        dataProvider.multiply($scope.a, $scope.b)
            .then(function(result) {
                $scope.result = result;
            })
    }
}])