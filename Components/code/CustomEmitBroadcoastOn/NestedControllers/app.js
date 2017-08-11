// Code goes here

var app = angular.module("MyApp", []);

app.controller("MyController1", function($scope, $rootScope) {

    //broadcast the event down
    $scope.OnClick = function(evt) {
        $scope.$broadcast("SendDown", "some data");
    }

    //handle SendDown event
    $scope.$on("SendDown", function(evt, data) {
        $scope.Message = "Inside SendDown handler of MyController1 : " + data;
    });

    //handle SendUp event
    $scope.$on("SendUp", function(evt, data) {
        $scope.Message = "Inside SendUp handler of MyController1 : " + data;
    });
});

app.controller("MyController2", function($scope, $rootScope) {

    //handle SendDown event
    $scope.$on("SendDown", function(evt, data) {
        $scope.Message = "Inside SendDown handler of MyController2 : " + data;
    });

    //handle SendUp event
    $scope.$on("SendUp", function(evt, data) {
        $scope.Message = "Inside SendUp handler of MyController2 : " + data;
    });

});

app.controller("MyController3", function($scope, $rootScope) {

    //handle SendDown event
    $scope.$on("SendDown", function(evt, data) {
        $scope.Message = "Inside SendDown handler of MyController3 : " + data;
    });

    //emit SendUp event up
    $scope.OnClick = function(evt) {
        $scope.$emit("SendUp", "some data");
    }

    //handle SendUp event
    $scope.$on("SendUp", function(evt, data) {
        $scope.Message = "Inside SendUp handler of MyController3 : " + data;
    });
});