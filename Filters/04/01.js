// The filter Filter

// The filter Filter can only be used on arrays because it selects a subset of an array.It returns an array containing only the matching items.
angular.module('myApp', []).controller('namesCtrl', function($scope) {
    $scope.names = [
        'Ramesh',
        'Pooja',
        'Mahesh',
        'Mahesh Kumar',
        'Ramanujam',
        'Osama',
        'Iqbal',
        'Karl',
        'Johnson',
        'Alex'
    ];
});