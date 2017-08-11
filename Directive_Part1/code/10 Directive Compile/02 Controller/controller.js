var app = angular.module('app', []);

app.controller('msg', ['$scope', function($scope) {

}]);

app.directive('message', function($interpolate) {
    return {
        //Controller is the best place access scope
        //You can access DOM but not really try to access or modify DOM here
        controller: function($scope, $element, $attrs) {
            console.log($attrs.text + '- In Controller');
        }

    }
});