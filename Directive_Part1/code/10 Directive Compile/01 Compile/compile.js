var app = angular.module('app', []);

app.controller('msg', ['$scope', function($scope) {

}]);

app.directive('message', function($interpolate) {
    return {
        //Compile is the first stept to be executed whenever directive is processed
        compile: function(tElement, tAttributes) {
            console.log(tAttributes.text + '- In Compile');
        }

    }
});