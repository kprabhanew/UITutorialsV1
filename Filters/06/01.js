// Sort an array based on user input

// You can sort an array according to the table columns.

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

    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    }
});