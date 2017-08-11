// array based on user input

// You can use the value of the input field as an expression in a filter by setting the ng - model directive on an input field.

angular.module('myApp', []).controller('namesCtrl', function($scope) {
    $scope.names = [
        'Ramesh',
        'Pooja',
        'Mahesh',
        'Ramanujam',
        'Osama',
        'Iqbal',
        'Karl',
        'Johnson',
        'Alex'
    ];
});