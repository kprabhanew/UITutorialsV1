/* What happens without an $apply() */

angular.module('myApp', []).controller('MessageController', function($scope) {

    $scope.getMessage = function() {
        setTimeout(function() {
            $scope.message = 'Fetched after 3 seconds';
            console.log('message:' + $scope.message);
        }, 2000);
    }

    $scope.getMessage();

});

/* What happens with $apply */
/* $scope.$apply() which automatically triggers $rootScope.$digest(). As a result the watchers are fired as usual and the view updates. */

angular.module('myApp', []).controller('MessageController', function($scope) {

    $scope.getMessage = function() {
        setTimeout(function() {
            $scope.$apply(function() {
                //wrapped this within $apply
                $scope.message = 'Fetched after 3 seconds';
                console.log('message:' + $scope.message);
            });
        }, 2000);
    }

    $scope.getMessage();

});