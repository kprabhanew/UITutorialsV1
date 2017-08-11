var app = angular.module('app', []);

app.controller('sample', ['$scope', function($scope) {

}]);

app.directive('message1', function() {
    return {
        templateUrl: 'msg1.html',
        transclude: true
    }
});