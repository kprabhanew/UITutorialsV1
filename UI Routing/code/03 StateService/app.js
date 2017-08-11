var app = angular.module('app', ['ui.router']);
//Fetch some content dynamically as part of your appication.
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('calc', {
            url: '/calc',
            templateUrl: "calc.html",
            controller: 'calcController',
        })
        .state('add', {
            url: 'add/:a/:b',
            templateUrl: "result.html",
            controller: "addController",
            data: {
                multiplier: 10
            }
        })
        .state('root', {
            url: '/',
            template: "<strong>You are at home page..pleasec click the link"
        })
        // .state('noroute', {
        //     url: '*path',
        //     template: "<strong>No route available...try clicking on links</strong>"
        // })
        //$urlRouterProvider.otherwise('/');
}]);

app.controller('calcController', ['$scope', '$state', function($scope, $state) {
    $scope.a = 0;
    $scope.b = 0;

    $scope.doAdd = function() {
            $state.go('add', {
                a: $scope.a,
                b: $scope.b
            });
        }
        //go - give flexibility to switch from one state to another

}]);

app.controller('addController', ['$scope', '$stateParams', '$state', 'dataProvider', '$rootScope', function($scope, $stateParams, $state, dataProvider, $rootScope) {
    $scope.a = 0;
    $scope.b = 0;

    if ($stateParams.a) {
        $scope.a = $stateParams.a;
    }
    if ($stateParams.b) {
        $scope.b = $stateParams.b;
    }

    console.log($state.get('add'));

    //$scope.result = (parseInt($scope.a) + parseInt($scope.b)) * $state.current.data.multiplier;

    $scope.goBack = function() {
        //console.log($state);
        $state.go('calc');
    }
    $scope.isLoading = true;
    dataProvider.add($scope.a, $scope.b)
        .then(function(result) {
            $scope.result = result.data * $state.current.data.multiplier;
            $scope.isLoading = false;
        })

}]);

app.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, formState, fromParams, options) {
        console.log('in $stateChangeStart');
    });
    $rootScope.$on('$stateChangeSuccess', function(e, toState, toParams, fromState, fromParams) {
        console.log('in $stateChangeSuccess');
    });
}]);

// Once you have loaded the template , that template gets cached at the angularjs level, if the particula template not available into the cached, then only it is going to have ajax request to be made to fetch the content of the template.That is going to happen if and only if you are fetching it first time.