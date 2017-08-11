var app = angular.module('app', []);

app.controller('sample', ['$scope', function($scope) {

    $scope.a = 10;
    $scope.b = 40;

}]);

//shares/uses parent scope
//no scope on its own
//scope id is same for both parent (controller) and child (directive)
app.directive('message', function() {
    return {

        //templateUrl: 'temp.html'
        template: '<div> 	a = {{a}}, b = {{b}}	 </div>'
            //+'Modify A : <input type="text" ng-model = a />'
    }

});