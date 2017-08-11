var app = angular.module('app', []);

app.controller('msg', ['$scope', function($scope) {
    $scope.a = 5; //this is available to directive, by default
}]);

app.directive('message', function($interpolate) {

    //Post Function
    return function(scope, iElement, iAttributes, controller) {
        //Instance modification 
        if (iAttributes.text === "3") {
            iElement.css("background-color", "yellow");
        }
        /**************** */
        //If you dont have controller you can not trigger the event handler so removing that event
        /******************** */
        //iElement.on("click", scope.btnClick);
    }
});