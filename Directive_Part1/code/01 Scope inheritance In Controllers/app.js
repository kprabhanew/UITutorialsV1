var app = angular.module("myApp", []);

//scope hierarchy
//child scope merged to parent (using prototypal inheritance)

var sample = angular.module("sample", []);

sample.controller("emp", ["$scope", function($scope) {
    $scope.Name = "Jag";
}]);

sample.controller("empDetails", ["$scope", function($scope) {
    $scope.Sal = 3400;
    $scope.Dept = "Sales";
}]);

sample.controller("empPayCheck", ["$scope", function($scope) {
    $scope.getTaxes = function() {
        return $scope.Sal * 30 / 100;
    };
    $scope.getNet = function() {
        return $scope.Sal - $scope.getTaxes();
    };
}]);