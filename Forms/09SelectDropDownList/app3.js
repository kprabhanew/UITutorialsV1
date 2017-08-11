angular.module("mainModule", [])
    .controller("mainController", function($scope) {

        $scope.colorsObject = {
            "R": "Red",
            "G": "Green",
            "B": "Blue"
        };

        $scope.peopleObject = {
            "1": { firstName: "John", lastName: "Doe", gender: "M" },
            "2": { firstName: "Alice", lastName: "White", gender: "F" },
            "3": { firstName: "Michael", lastName: "Green", gender: "M" }
        };

        $scope.getPersonFullName = function(person) {
            return person.firstName + " " + person.lastName;
        };

        $scope.getPersonIdAndFullName = function(person) {
            return "(" + person.id + ") " + person.firstName + " " + person.lastName;
        };

        $scope.selectPersonById = function(id) {
            $scope.peopleArrayValue5 = { id: id };
        };

        $scope.colorsArray = ["Red", "Green", "Blue"];
    });