var app = angular.module('app', []);

app.controller('emp', ['$scope', function($scope) {
    $scope.a = 1;
    $scope.b = 2;
    $scope.c = 3;
    $scope.d = 4; // No Watch for this variable
}]);