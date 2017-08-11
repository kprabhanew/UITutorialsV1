var app = angular.module('mainApp', []);
app.directive('myEmployee', function() {
    return {
        restrict: 'EA',
        scope: {}, //isolate scope.
        template: "<div>My First Directive.</div><div ng-transclude style='color:red;'></div>",
        transclude: true
    };
});