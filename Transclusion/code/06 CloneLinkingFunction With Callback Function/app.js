var app = angular.module('app', []);

app.controller('sample', ['$scope', function($scope) {

}]);

app.directive('message1', function() {
    return {
        templateUrl: 'msg1.html',
        transclude: true, //Transcluding mechanisum made available
        controller: function($scope, $element, $attrs, $transclude) {
            //it clones while it trys to transclude the content of original template
            //$transclude();
            $transclude(function(transEl) {
                $element.find("#innerPanel1").append(transEl)
            });

            $transclude(function(transEl) {
                $element.find("#innerPanel2").append(transEl)
            });

        }
    }
});