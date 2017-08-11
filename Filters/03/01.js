// add filters to directives

// Filters can be added to directives, like ng - repeat, by using the pipe character | , followed by a filter.

angular.module('myApp', []).controller('namesCtrl', function($scope) {
    $scope.names = [
        { name: 'Ramesh', country: 'India' },
        { name: 'Alex', country: 'USA' },
        { name: 'Pooja', country: 'India' },
        { name: 'Mahesh', country: 'India' },
        { name: 'Iqbal', country: 'Pakistan' },
        { name: 'Ramanujam', country: 'India' },
        { name: 'Osama', country: 'Iraq' },
        { name: 'Johnson', country: 'UK' },
        { name: 'Karl', country: 'Russia' }
    ];
});