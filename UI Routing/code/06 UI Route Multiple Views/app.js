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
                },
                'test': {
                    template: "<strong>testing info</strong>"
                }
            }
        })
        .state('employees', {
            url: "/employees",
            views: {
                'emp-header': {
                    templateUrl: 'emp-header.html'
                },
                'emp-list': {
                    templateUrl: "emp-list.html",
                    controller: "empListController"
                }
            }
        })
        .state('employeeDetail', {
            url: "/employees/:empno",
            views: {
                "emp-header": {
                    templateUrl: 'emp-header.html'
                },
                "emp-detail": {
                    templateUrl: "emp-detail.html",
                    controller: "empDetailController"
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
app.controller('empListController', ['$scope', 'dataProvider', function($scope, dataProvider) {
    $scope.isLoading = true;
    dataProvider.getemployeeList()
        .then(function(result) {
            $scope.result = result.data;
            $scope.isLoading = false;
        })
}]);
app.controller('empDetailController', ['$scope', 'dataProvider', '$stateParams', function($scope, dataProvider, $stateParams) {
    $scope.isLoading = true;
    $scope.isNotFound = false;
    dataProvider.getemployeeDetail($stateParams.empno)
        .then(function(result) {
            if (result.data != null && result.data != undefined) {
                $scope.employee = result.data;
            } else {
                $scope.isNotFound = true;
            }
            $scope.isLoading = false;
        })
}]);