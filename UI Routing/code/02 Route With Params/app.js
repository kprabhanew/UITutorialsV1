var app = angular.module('app', ['ui.router']);
//Fetch some content dynamically as part of your appication.
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('firstmessage', {
            //url: '/first-msg/:a/:b',
            url: '/first-msg/{a}/{b}',
            templateUrl: "msg1.html",
            controller: 'msg1',
        })
        .state('secondmessage', {
            url: '/second-msg/{c:[0-9]+}/{d}',
            templateUrl: "msg2.html",
            controller: 'msg2'
        })
        .state('thirdmessage', {
            url: '/third-msg/:a',
            templateUrl: "msg1.html",
            controller: 'msg1'
        })
        .state('thirdmessage2', {
            url: '/third-msg/:a/:b',
            templateUrl: "msg1.html",
            controller: 'msg1'
        })
        .state('fourthmessage', {
            url: '/fourth-msg', //can not be used as part of routing url
            templateUrl: 'msg1.html',
            controller: 'msg1',
            params: { //can work with ui-sref
                a: { value: '1' }, //default value 1
                b: { value: '2' }
            }
        })
        .state('fifthmessage', {
            url: '/fifth-msg/:a/:b', //working with slahes only in routing url
            templateUrl: 'msg1.html',
            controller: 'msg1',
            params: { //can work with ui-sref
                a: { value: '1' }, //default value 1
                b: { value: '2' }
            }
        })
        .state('sixthmessage', {
            url: '/sixth-msg/:a/:b',
            templateUrl: 'msg1.html',
            controller: 'msg1',
            params: {
                a: { value: '1', squash: true },
                b: { value: '2', squash: true }
            }
        })
        .state('seventhmessage', {
            url: '/seventh-msg/:a/:b',
            templateUrl: 'msg1.html',
            controller: 'msg1',
            params: {
                a: { value: '1', squash: '-' },
                b: { value: '2', squash: '~' }
            }
        })
        .state('eigthmessage', {
            url: '/eigth-msg?a&b',
            templateUrl: 'msg1.html',
            controller: 'msg1'
        })
        .state('root', {
            url: '/',
            template: "<strong>You are at home page..pleasec click the link</strong>"
        })
        // .state('noroute', {
        //     url: '*path',
        //     template: "<strong>No route available...try clicking on links</strong>"
        // })

    //$urlRouterProvider.otherwise('/');


}]);

app.controller('msg1', ['$scope', '$stateParams', function($scope, $stateParams) {
    $scope.a = $stateParams.a;
    $scope.b = $stateParams.b;
}]);

app.controller('msg2', ['$scope', '$stateParams', function($scope, $stateParams) {
    $scope.c = $stateParams.c;
    $scope.d = $stateParams.d;
}]);

// Once you have loaded the template , that template gets cached at the angularjs level, if the particula template not available into the cached, then only it is going to have ajax request to be made to fetch the content of the template.That is going to happen if and only if you are fetching it first time.