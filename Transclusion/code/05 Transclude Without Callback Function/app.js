var app = angular.module('app', []);

app.controller('sample', ['$scope', function($scope) {

}]);

app.directive('message1', function() {
    return {
        templateUrl: 'msg1.html',
        transclude: true, //Transcluding mechanisum made available
        controller: function($scope, $element, $attrs, $transclude) {
            //$element.find("#innerPannel").append($transclude());
            //$transclude() - Gets Conntent extracted and instantiated , finally injected into innerPanel
            //transclude() - is good if not multiple transclude functions

            /******** Multiple Transcluding ****/
            $element.find("#innerPannel1").append($transclude());
            $element.find("#innerPannel2").append($transclude());
        }
    }
});