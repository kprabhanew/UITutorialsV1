var app = angular.module('app', []);

app.controller('sample', ['$scope', function($scope) {

}]);

app.directive('message1', function() {
    return {
        templateUrl: 'msg1.html',
        transclude: true,
        //iElement is jquery Object which hold of its entire iElement

        link: function(scope, iElement, iAttributes, controller, transclude) {
            var content = transclude();
            iElement.find("#innerPannel").append(content);
        }

    }
});