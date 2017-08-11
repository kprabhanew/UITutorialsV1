var app = angular.module('app', []);

app.controller('msg', ['$scope', function($scope) {
    $scope.a = 5; //this is available to directive, by default
}]);

app.directive('message', function($interpolate) {
    return {
        compile: function(tElement, tAttributes) {
            console.log(tAttributes.text + " -In compile..");
            //Template modification
            tElement.css("border", "1px solid red")
            return {
                pre: function(scope, iElement, iAttributes, controller) {
                    console.log(iAttributes.text + " -In pre..");
                },

                post: function(scope, iElement, iAttributes, controller) {
                    //Instance modification 
                    if (iAttributes.text === "3") {
                        iElement.css("background-color", "yellow");
                    }

                    //Event Handler
                    console.log(iAttributes.text + " -In Post..");
                }

            }
        },

        //Every Instance will have own controller
        controller: function($scope, $element, $attrs) {
            //functional/logic stuff to be maintained scope related stuff should always be available through the controller
            var v = $interpolate($attrs.text)($scope)
            console.log(v + " -In controller..");
        },

    }
});