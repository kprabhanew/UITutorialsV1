var app = angular.module('app', []);

app.controller('sample', ['$scope', function($scope) {
    $scope.a = {
        x: 10
    }
}]);

//Shared Scope
app.directive('message1', function() {
    return {
        //scope: false,
        templateUrl: 'msg1.html',
        transclude: true, //Transcluding mechanisum made available

    }
});