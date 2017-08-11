var app = angular.module('app', []);

app.controller('emp', ['$scope', function($scope) {
    $scope.a = 1;
    $scope.b = 2;
    $scope.c = 4;

    $scope.updateC = function() {
        $scope.c = $scope.a * 4;
    };

    $scope.$watch('c', function(newValue, oldValue) { //watcher 4
        if (newValue != oldValue) {
            console.log("updated C to " + newValue);
        }
    });

}]);

$(document).ready(function() {
    $("#myBtn").on("click", function() {
        alert('hi');
    })
    $("#myText").on("blur", function() {
            alert('Blur event triggered');
        })
        //
})