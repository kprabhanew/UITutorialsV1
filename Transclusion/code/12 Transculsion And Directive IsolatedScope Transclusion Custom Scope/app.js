var app = angular.module('app', []);

app.controller('sample', ['$scope', function($scope) {
    $scope.a = {
        x: 10
    }
}]);

//Custom Transclusion Scope creation
app.directive('message1', function() {
    return {
        templateUrl: 'msg1.html',
        transclude: true, //Transcluding mechanisum made available
        scope: {}, //Isolated Scope
        controller: function($scope, $element, $attrs, $transclude) {
            //Own Scope Variable
            $scope.b = {
                y: 20
            };

            //Create New Sope object that to an Isolated Scope object (true) From the current scope
            var customScope = $scope.$new(true);
            customScope.a = {
                x: 100 //It can have its own custom value
            };
            customScope.b = {
                y: 200
            };
            $transclude(customScope, function(transEl) { // Clone Linking Function
                $element.find('#innerPanel').append(transEl); //Append content to "innerPanel" associated with "customScope"
            });
        }
    }
});