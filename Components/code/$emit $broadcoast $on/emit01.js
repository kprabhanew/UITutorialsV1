var app = angular.module('app', []);

app.controller('calc1', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.a = 10;
    $scope.b = 20;

    $scope.doCalc1Emit1 = function() {
        $scope.$emit("MyCalcEmit1Event");
    }

    $scope.$on("MyCalcEmit1Event", function(e, data) {
        console.log("calc1.MyCalc1Emit1Event - raised by emit");
    })

    $rootScope.$on("MyCalcEmit1Event", function(e, data) {
        console.log("root.calc1.MyCalc1Emit1Event - raised by emit");
    })
}])

app.controller('calc2', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.c = 30;
    $scope.d = 40;
}])

app.controller('childcalc1', ['$scope', '$rootScope', function($scope, $rootScope) {

}])