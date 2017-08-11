var app = angular.module("myApp", []);
//Creating Factory

//create utility function with factory
app.factory("myFactory", function() {
    console.log("I am being Called First Time Form Factory");
    // here we return the object
    var factoryObject = {};
    factoryObject.Hello = function() {
        return "Hello";
    }
    factoryObject.Sum = function(a, b) {
        return a + b;
    }
    return factoryObject;
});

//Service
app.service("myService", function() {
    console.log("I am being Called First Time From Service");
    // here we return the object   
    this.Hello = function() {
        return "Hello";
    }
    this.Sum = function(a, b) {
        return parseInt(a) + parseInt(b);
    }

});

//3. Provider
app.provider("myProvider", function() {
    console.log("I am being Called First Time From Provider");
    this.$get = function() {
        return {
            Hello: function() {
                return "Hello ! i am from Provider";
            },

            Sum: function(a, b) {
                return a + b;
            }
        }
    }
})

// app.provider("myProvider", function() {
//     console.log("I am being Called First Time From Provider");

//     var displayHello = function() {
//         return "Hello ! i am from Provider";
//     };

//     var displaySum = function(a, b) {
//         return a + b;
//     }

//     this.$get = function() {
//         return {
//             Hello: displayHello,
//             Sum: displaySum
//         }
//     }
// })




app.controller("myController", function($scope, myFactory) {
    // service function call
    $scope.FactoryOutput = "Look for Factory output here.";
    $scope.HelloFactory = function() {
        $scope.FactoryOutput = myFactory.Hello();
    };
    $scope.SumFactory = function() {
        $scope.FactoryOutput = "The sum is : " + myFactory.Sum(2, 5);
    };
});

app.controller("myController2", function($scope, myService) {
    // service function call
    $scope.ServiceOutput = "Look for service output here.";
    $scope.HelloService = function() {
        $scope.ServiceOutput = myService.Hello();
    };
    $scope.SumService = function() {
        $scope.ServiceOutput = "The sum is : " + myService.Sum(2, 5);
    };
});

app.controller("myController3", function($scope, myProvider) {
    // service function call
    $scope.ProviderOutput = "Look for Provider output here.";
    $scope.HelloProvider = function() {
        $scope.ProviderOutput = myProvider.Hello();
    };
    $scope.SumProvider = function() {
        $scope.ProviderOutput = "The sum is : " + myProvider.Sum(2, 5);
    };
});