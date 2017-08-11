var app = angular.module('app', ['ui.router']);
//Fetch some content dynamically as part of your appication.
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('firstmessage', {
            url: '/first-msg',
            //template: "<strong>This is first message</strong>",
            templateUrl: "msg1.html",
            controller: 'msg1',
        })
        .state('secondmessage', {
            url: '/second-msg',
            templateUrl: "msg2.html",
            controller: 'msg2'
        })
        .state('root', {
            url: '/',
            template: "<strong>You are at home page..pleasec click the link"
        })
        // .state('noroute', {
        //     url: '*path',
        //     template: "<strong>No route available...try clicking on links</strong>"
        // })

    $urlRouterProvider.otherwise('/');


}]);

app.controller('msg1', ['$scope', function($scope) {
    $scope.a = 10;
    $scope.b = 20;
}]);

app.controller('msg2', ['$scope', function($scope) {
    $scope.c = 30;
    $scope.d = 40;
}]);

// Once you have loaded the template , that template gets cached at the angularjs level, if the particula template not available into the cached, then only it is going to have ajax request to be made to fetch the content of the template.That is going to happen if and only if you are fetching it first time.