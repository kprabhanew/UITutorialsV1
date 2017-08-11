app.config(['dataProviderProvider', function(dataProviderProvider) {
    dataProviderProvider.config('http://localhost:58973/api/students');
}])

app.provider('dataProvider', function() {
    var baseUrl = '';
    this.config = function(url) {
        baseUrl = url;
    };

    this.$get = ['$http', '$log', function($http, $log) {

        var oDataService = {};
        oDataService.add = function(a, b) {
            return $http({
                url: baseUrl + '/add/',
                params: { a: a, b: b },
                method: 'GET',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            })
        }
        oDataService.multiply = function(a, b) {
            return $http({
                url: baseUrl + '/multiply/',
                params: { c: a, d: b },
                method: 'GET',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            })
        }
        return oDataService;
    }];
});