var app = angular.module('app', []);

app.controller('msg', ['$scope', function($scope) {
    $scope.a = 5; //this is available to directive, by default
}]);

app.directive('message', function($interpolate) {
    return {
        compile: function(tElement, tAttributes) {
            console.log(tAttributes.text + " -In compile..");
            return {
                pre: function(scope, iElement, iAttributes, controller) {
                    console.log(iAttributes.text + " -In pre..");
                },

                post: function(scope, iElement, iAttributes, controller) {
                    console.log(iAttributes.text + " -In Post..");
                }

            }
        },
        controller: function($scope, $element, $attrs) {
            var v = $interpolate($attrs.text)($scope)
            console.log(v + " -In controller..");
        },

    }
});