var app = angular.module("app", ["ui.router"]);

app.config(['$stateProvider', function($stateProvider) {
    $stateProvider
        .state('sample1', {
            url: '/sample01',
            templateUrl: 'msg1.html',
            controller: 'msg1'
        })
        .state('sample02', {
            url: '/sample02',
            views: {
                '': {
                    templateUrl: 'msg1.html',
                    controller: 'msg1'
                }
            }
        })
        .state('root', {
            url: '/',
            template: "<strong>You are root...click something else..</strong>"
        })
        .state('otherwise', {
            url: "*path",
            template: "<strong>no route available...</strong>"
        })
}]);
app.controller('msg1', ['$scope', function($scope) {
    $scope.a = 10;
    $scope.b = 20;
}]);