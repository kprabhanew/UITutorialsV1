var app = angular.module('app', []);

app.controller('msg', ['$scope', function($scope) {
    $scope.a = 5; //this is available to directive, by default
}]);

app.directive('message', function($interpolate) {
    return {

        link: {
            pre: function(scope, iElement, iAttributes, controller) {
                console.log(iAttributes.text + " -In pre..");
            },
            post: function(scope, iElement, iAttributes, controller) {
                //Instance modification 
                if (iAttributes.text === "3") {
                    iElement.css("background-color", "yellow");
                }
                //Event Handler
                iElement.on("click", scope.btnClick);
            }

        },

        //Every Instance will have own controller
        controller: function($scope, $element, $attrs) {
            //functional/logic stuff to be maintained scope related stuff should always be available through the controller
            var v = $interpolate($attrs.text)($scope)
            console.log(v + " -In controller..");

            //Attaching button click function to the scope , that wich going to accesed inside the iElement of Post funciton/Phase
            $scope.btnClick = function() {
                alert(v);
            }

        },

    }
});