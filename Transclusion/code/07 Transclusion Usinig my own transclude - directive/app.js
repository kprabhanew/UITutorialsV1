var app = angular.module('app', []);

app.controller('sample', ['$scope', function($scope) {

}]);

//using my own transclude directive
app.directive('message1', function() {
    return {
        templateUrl: 'msg1.html',
        transclude: true,
    }
});


app.directive('myTransclude', function() { //3
    return {
        link: function(scope, iElement, iAttrs, controller, transclude) { //2

            iElement.append(transclude()) //1
        }

    }
});