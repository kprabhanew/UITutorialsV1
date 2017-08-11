var app = angular.module('app', []);

app.controller('sample', ['$scope', function($scope) {
    $scope.a = {
        x: 10
    }
}]);

//Inherited Scope
app.directive('message1', function() {
    return {
        templateUrl: 'msg1.html',
        transclude: true, //Transcluding mechanisum made available
        scope: true,
        controller: function($scope, $element, $attrs, $transclude) {
            //Adding scobe variable to parent/Shared scope
            $scope.b = {
                y: 20
            }
        }
    }
});