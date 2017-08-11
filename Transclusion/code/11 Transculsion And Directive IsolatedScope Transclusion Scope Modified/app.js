var app = angular.module('app', []);

app.controller('sample', ['$scope', function($scope) {
    $scope.a = {
        x: 10
    }
}]);

//Manually transclusion scope (and Custom data to Transclusion Scope)
//Inject the transcluded content into template through clone linking function
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

            // //Without scope object
            // $transclude(function(transEl) {
            //     $element.find("#innerPanel").append(transEl)
            // });

            //Send custom data to transcluded element whenever need to work with transclusion scope
            //Transclude object created by angularjs and it made available through the - $transScope
            //$parent not going to work here - It will not refer directive

            $transclude(function(transElem, $transScope) { // Clone Linking Function
                $transScope.b = {}; //empty object in javascript
                $transScope.b.y = $scope.b.y; //Transclusion Scope = Controller Scope;
                $element.find("#innerPanel").append(transElem)
            })
        }
    }
});