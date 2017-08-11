var app = angular.module('app', []);

app.controller('calc1', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.a = 10;
    $scope.b = 20;

    //Raise and handle event in same controller
    $scope.doCalc1BroadcastRoot = function() {
        $rootScope.$broadcast("MyCalcBroadcastRootEvent");
    }

    $scope.$on("MyCalcBroadcastRootEvent", function(e, data) {
        console.log("Parentcalc1.MyCalcBroadcastRootEvent - raised by Broadcast root");
    })

    $rootScope.$on("MyCalcBroadcastRootEvent", function(e, data) {
        console.log("root.Parentcalc1.MyCalcBroadcastRootEvent - raised by Broadcast root");
    })

}])

app.controller('calc2', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.c = 30;
    $scope.d = 40;

    $scope.$on("MyCalcBroadcastRootEvent", function(e, data) {
        console.log("sibling.MyCalcBroadcastRootEvent - raised by Broadcast root");
    })

    $rootScope.$on("MyCalcBroadcastRootEvent", function(e, data) {
        console.log("root.sibling.MyCalcBroadcastRootEvent - raised by Broadcast root");
    })

}])

app.controller('childcalc1', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.$on("MyCalcBroadcastRootEvent", function(e, data) {
        console.log("child.MyCalcBroadcastRootEvent - raised by Broadcast root");
    })

    $rootScope.$on("MyCalcBroadcastRootEvent", function(e, data) {
        console.log("root.child.MyCalcBroadcastRootEvent - raised by Broadcast root");
    })
}])

//module level $rootScope
app.run(['$rootScope', function($rootScope) {
    $rootScope.$on("MyCalcBroadcastRootEvent", function(e, data) {
        console.log("root.module.MyCalcBroadcastRootEvent - raised by Broadcast root module");
    })



}])