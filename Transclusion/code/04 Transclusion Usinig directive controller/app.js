var app = angular.module('app', []);

app.controller('sample', ['$scope', function($scope) {

}]);

app.directive('message1', function() {
    return {
        templateUrl: 'msg1.html',
        transclude: true,
        //iElement is jquery Object which hold of its entire iElement

        controller: function($scope, $element, $attrs, $transclude) {
            var content = $transclude();
			//This one is same as clone linking function
            $element.find("#innerPannel").append(content);
        }

    }
});