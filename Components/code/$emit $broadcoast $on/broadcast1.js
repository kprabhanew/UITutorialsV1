var app = angular.module('app', []);

app.controller('calc1', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.a = 10;
    $scope.b = 20;

    //Raise and handle event in same controller
    $scope.doCalc1Broadcast1 = function() {
        $scope.$broadcast("MyCalcBroadcast1Event");
    }

    $scope.$on("MyCalcBroadcast1Event", function(e, data) {
        console.log("calc1.MyCalc1Broadcast1Event - raised by Broadcast");
    })

}])

app.controller('calc2', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.c = 30;
    $scope.d = 40;
    //This will not work
    //Broadcast never go through the sibling, it is only work with child or nested controllers
    $scope.$on("MyCalcBroadcast1Event", function(e, data) {
        console.log("sibling.MyCalc1Broadcast1Event - raised by Broadcast");
    })
}])

app.controller('childcalc1', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.$on("MyCalcBroadcast1Event", function(e, data) {
        console.log("child.MyCalc1Broadcast1Event - raised by Broadcast");
    })
}])