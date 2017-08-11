var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/sumUrl/:x/:y', { //a: & b: are mandatory
            templateUrl: 'sumurl.html',
            controller: 'myCtrl'
        })
        .when('/sumInput', {
            templateUrl: 'sumInput.html',
            controller: 'suminputCtrl'
        })
        .when('/emptyUrl', {
            templateUrl: 'emptyUrl.html'
        })
        .when('/calc/:option/:a?/:b?', { //Re route to some other existing route based on the condition specified here

            redirectTo: function(params, path, search) {
                // params(option/a/b), path, search - provide by angularJS
                // search - QueryString Parametes
                console.log(params);
                if (params.option == 'sumUrl') {
                    console.log('/sumUrl/' + (params.a - 0) + '/' + (params.b - 0));
                    return '/sumUrl/' + (params.a - 0) + '/' + (params.b - 0);
                } else if (params.option == 'sumInput') {
                    console.log('/sumInput');
                    return '/sumInput';
                } else {
                    console.log('/');
                    return '/';
                }
            }
        })
        .when('/sumFour/:a/:b/:c?/:d?', { //c? & d? are optional
            templateUrl: 'sumFour.html',
            controller: 'sumFourCtrl'
        })
        .when('/', {
            template: '<strong>Welcome to my app...</strong><br><i>Click One of the link from left panel</i>'
        })
        .otherwise({ //If the routing does not match any of the above
            template: '<strong>No Content available here...</strong><i>Click one of the link from left panel</i>'
        })
}])

app.controller('myCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.a = $routeParams.x;
    $scope.b = $routeParams.y;
}])

app.controller('suminputCtrl', ['$scope', '$location', '$interpolate', function($scope, $location, $interpolate) {
    $scope.a = 0;
    $scope.b = 0;

    $scope.doSum = function() {
        //Compiler during the compilation process matches text and attributes using interpolate service to see if they contains embedded expressions. 
        //As part of normal digest cycle these expressions are updated and registered as watches.
        var url = $interpolate('/sumUrl/{{a}}/{{b}}')($scope); // ($scope) - Interpolate works with current scope
        console.log(url);
        $location.path(url); //Replaces our particular url of the browser wiht this new url
        //We are re route an existing route based on some values we captured from user 
    }
}])

app.controller('sumFourCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.a = $routeParams.a;
    $scope.b = $routeParams.b;
    $scope.c = $routeParams.c;
    $scope.d = $routeParams.d;
}])