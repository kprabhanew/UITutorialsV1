var app = angular.module('app', []);

app.controller('sample', ['$scope', function($scope) {

    //all of the following scope members are available to all child scopes
    //as long as they do not define on their own
    $scope.a = 10;
    $scope.b = 20;

    $scope.changeValueB = function() {
        $scope.b = 30; //applies to current scope
    }

}]);


app.directive('message', function() {

    return {
        //templateUrl: 'info-msg.htm',
        template: '<div>' +
            'a = {{a}}, b = {{b}}, c = {{c}}' +
            '<br><button ng-click="changeValueB()">Change value B</button>' +
            '</div>',
        //creates child or inherited scope 
        //diff id for each directive instance
        //current scope is prototypically inherited from parent scope (__proto__) of controller
        //parent scope ids are same for all instances of child scopes
        //parent members still accessible ($scope.$parent)		
        scope: true,

        //Directive Based Controller
        //Own Members to the Child Scope
        controller: function($scope, $element, $attrs) {
            $scope.c = 100; //creates new child member 
			

            //Overwrite Defenition of Parent
            $scope.changeValueA = function() {
                $scope.a = 5; //creates new child member (no affect on parent)
            }

            $scope.changeValueB = function() {
                $scope.b = 40; //creates new child member (no affect on parent)
            }
        }
    }

});

app.directive('message2', function() {

    return {
        //templateUrl: 'info-msg.htm',
        template: '<div>' +
            'a = {{a}}, b = {{b}}, c = {{c}}' +
			'<br><input type="text" ng-model="a"/>'+ 
            '<br><button ng-click="changeValueB()">Change value B</button>' +
            '</div>',
        scope: true, //creates child or inherited scope
        controller: function($scope, $element, $attrs) {
            $scope.c = 200; //creates new child member 
            $scope.changeValueB = function() {
                $scope.b = 50; //creates new child member (no affect on parent)
                //$scope.$parent.b = 50; //less common way, but possible
            }
        }
    }

});