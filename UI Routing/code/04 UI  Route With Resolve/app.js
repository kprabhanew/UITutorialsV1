angular.module('app', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
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
            params: {
                a: {
                    value: null,
                    squash: true
                },
                b: {
                    value: null,
                    squash: true
                }
            }
        })
        .state('multiply', {
            url: 'multiply/:a/:b',
            templateUrl: "result.html",
            controller: "multiplyController",
            resolve: {
                result: function(dataProvider, $stateParams) {
                    var a = $stateParams.a;
                    var b = $stateParams.b;

                    //var promise = dataProvider.multiply(a,b);
                    //return promise;

                    return dataProvider.multiply(a, b);
                }

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

}]).run(function($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, formState, fromParams, options) {
        console.log('in $stateChangeStart');
        if (toState.resolve) {
            $rootScope.isLoading = true;
        }
    });
    $rootScope.$on('$stateChangeSuccess', function(e, toState, toParams, fromState, fromParams) {
        console.log('in $stateChangeSuccess');
        if (toState.resolve) {
            $rootScope.isLoading = false;
        }
    });
    //console.clear();
}).controller('calcController', ['$scope', '$state', '$rootScope', function($scope, $state, $rootScope) {
    $scope.a = 0;
    $scope.b = 0;

    $scope.doAdd = function() {
        $state.go('add', {
            a: $scope.a,
            b: $scope.b
        });
    }
    $scope.doMultiply = function() {
            $state.go('multiply', {
                a: $scope.a,
                b: $scope.b
            });
        }
        //go - give flexibility to switch from one state to another

}]).controller('addController', ['$scope', '$stateParams', '$state', 'dataProvider', '$rootScope', function($scope, $stateParams, $state, dataProvider, $rootScope) {
    $scope.a = 0;
    $scope.b = 0;
    //console.log($state);
    if ($stateParams.a) {
        $scope.a = $stateParams.a;
    }
    if ($stateParams.b) {
        $scope.b = $stateParams.b;
    }

    //console.log($state.get('add'));

    //$scope.result = (parseInt($scope.a) + parseInt($scope.b)) ;

    $scope.goBack = function() {
        $state.go('calc');
    }
    $scope.isLoading = true;
    dataProvider.add($scope.a, $scope.b)
        .then(function(result) {
            $scope.result = result.data;
            $scope.isLoading = false;
        })

}]).controller('multiplyController', ['$scope', '$state', 'result', function($scope, $state, result) {
    $scope.goBack = function() {
        $state.go('calc');
    }
    $scope.result = result.data;
}]).provider('dataProvider', function() {
    var baseUrl = '';
    this.config = function(url) {
        baseUrl = url;
    };

    this.$get = ['$http', '$log', function($http, $log) {
        var oDataService = {};
        oDataService.add = function(a, b) {
            console.log("I am form Add..")
            return $http({
                url: baseUrl + '/Add/',
                params: { a: a, b: b },
                method: 'GET',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            })
        }

        oDataService.multiply = function(a, b) {
            console.log("I am form multiply..")
            return $http({
                url: baseUrl + '/Multiply/',
                params: { c: a, d: b },
                method: 'GET',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            })
        }

        return oDataService;
    }];
}).config(['dataProviderProvider', function(dataProviderProvider) {
    dataProviderProvider.config('http://localhost:58973/api/students');
}])


// Once you have loaded the template , that template gets cached at the angularjs level, if the particula template not available into the cached, then only it is going to have ajax request to be made to fetch the content of the template.That is going to happen if and only if you are fetching it first time.

// Without resolve - switch to state first and then get the data later
// With resolve - fetch data first (afer getting the result of multiply then only i would like to switch to the new state)