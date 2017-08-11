var app = angular.module('app', []);

app.controller('sample', ['$scope', function($scope) {

    $scope.a = 10;
    $scope.b = 20;

    //Sum Calculate Parent Conroller 
    $scope.doSum = function(x, y) {
        alert("Sum = " + (parseInt(x) + parseInt(y)));
    }

}]);

app.directive('message', function() {

    return {
        templateUrl: 'info-msg.htm',
        //& - function binding (call external function from directive)
        scope: {
            extSum: '&'

            //third way (with third way in markup) with  different specification of attribute
            //extSum: '&justSum'
        },

        //Directive based controller
        controller: function($scope, $element, $attrs) {

            //Add a button execute the function
            $scope.doProcess = function() {
                //Execute External Sum
                //$scope - Local Scope / Isolate Scope
                //$scope.p,q - From Current Scope
                $scope.extSum({ m: $scope.p, n: $scope.q });
            };

            //Access Parent directly from isolated scope
            // $scope.doProcess2 = function() {
            //     //$scope.extSum()($scope.p, $scope.q);            
            //     //$scope.extSum()($scope.p, $scope.q * $scope.$parent.a);
            //     $scope.extSum({ m: $scope.p, n: ($scope.q * $scope.$parent.a) })
            // }

        }


    }

});