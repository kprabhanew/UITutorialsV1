// Code goes here

var app = angular.module("MyApp", []);

app.controller("MyController1", function($scope, $rootScope) {
    //raise event on $rootScope
    $scope.OnClick = function(evt) {
        $rootScope.$broadcast("SendDown", "some data");
    }

    //event handler
    $scope.$on("SendDown", function(evt, data) {
        $scope.Message = "Inside MyController1 : " + data;
    });

});

app.controller("MyController2", function($scope, $rootScope) {
    //event handler
    $scope.$on("SendDown", function(evt, data) {
        $scope.Message = "Inside MyController2 : " + data;
    });

});

app.controller("MyController3", function($scope, $rootScope) {
    //event handler
    $scope.$on("SendDown", function(evt, data) {
        $scope.Message = "Inside MyController3 : " + data;
    });
});