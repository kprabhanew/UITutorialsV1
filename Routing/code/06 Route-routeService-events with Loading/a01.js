// 1.Without Force Reload - line# 65
// 2.With Force Reload - line# 68

var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/calc/:option?/:a?/:b?', {
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

app.controller('calculateCtrl', ['$scope', 'dataProvider', '$location', '$routeParams', '$route', function($scope, dataProvider, $location, $routeParams, $route) {
    console.log("in controller ....")
    $scope.a = 0;
    $scope.b = 0;



    if ($routeParams.a) {
        $scope.a = $routeParams.a;
    }

    if ($routeParams.b) {
        $scope.b = $routeParams.b;
    }

    if ($routeParams.option && $routeParams.a && $routeParams.b) {
        if ($routeParams.option == 'add') {
            $scope.isLoading = true;
            dataProvider.add($scope.a, $scope.b)
                .then(function(result) {
                    $scope.result = result;
                    $scope.isLoading = false;
                })
        } else
        if ($routeParams.option == 'multiply') {
            $scope.isLoading = true;
            dataProvider.multiply($scope.a, $scope.b)
                .then(function(result) {
                    $scope.result = result;
                    $scope.isLoading = false;
                })
        } else {
            $location.url("/calc");
        }
    }

    $scope.doAdd = function() {
        var path = '/calc/add/' + $scope.a + '/' + $scope.b;

        if ($location.path() == path) {
            $route.reload(); //Eventhough Same Route , Same Values
        } else {
            $location.url(path);
        }
    }

    $scope.doMultiply = function() {
        var path = '/calc/multiply/' + $scope.a + '/' + $scope.b;
        $location.url(path);
    }

    //doUpdateResult
    $scope.doUpdateResult = function() {
        $route.reload(); // Reload the current route(calc/add/1/2) , it will not figure out what values are available

        $route.updateParams({
                a: $scope.a,
                b: $scope.b
            }) //updateParams - indeed to reload
    }
}])

app.controller('calculateCtrl2', ['$scope', 'dataProvider', function($scope, dataProvider) {
    $scope.a = 0;
    $scope.b = 0;
    $scope.myAdd2 = function() {
        dataProvider.add($scope.a, $scope.b)
            .then(function(result) {
                $scope.result = result;
            })
    }
}])