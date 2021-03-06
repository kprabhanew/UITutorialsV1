app.provider('dataProvider', function() {
    var baseUrl = '';
    this.config = function(url) {
        baseUrl = url;
    };

    this.$get = ['$http', '$log', function($http, $log) {

        //dataProvider.add($scope.a, $scope.b)
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
        oDataService.getemployeeList = function() {
            console.log("Get Employee List Service ..")
            return $http({
                url: baseUrl,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            })
        }

        oDataService.getemployeeDetail = function(id) {
            console.log("Get Employee List Service ..")
            return $http({
                url: baseUrl,
                params: { id },
                method: 'GET',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            })
        }

        return oDataService;
    }];
});

app.config(['dataProviderProvider', function(dataProviderProvider) {
    dataProviderProvider.config('http://localhost:58973/api/students');
}])

$http({
        method: 'POST',
        url: urlBase + '/tasks/insert/' + $scope.taskName + '/' + $scope.taskDesc + '/' + $scope.taskPriority + '/' + $scope.taskStatus
    })
    .then(function(success) {
        debugger;
        console.log(success)
    }, function(error) {
        console.log(error)
        debugger;
    })