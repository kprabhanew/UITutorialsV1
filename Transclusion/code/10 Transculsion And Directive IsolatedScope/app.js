var app = angular.module('app', []);

app.controller('sample', ['$scope', function($scope) {
    $scope.a = {
        x: 10
    }
}]);

//Isolated Scope
app.directive('message1', function() {
    return {
        templateUrl: 'msg1.html',
        transclude: true, //Transcluding mechanisum made available
        scope: {}, //Isolated Scope
        controller: function($scope, $element, $attrs, $transclude) {
            //Own Scope Variable
            $scope.b = {
                y: 20
            }
        }
    }
});