var mod = angular.module("MyModule", []);

mod.service("myService", function() { // CHANGED "factory" to "service"
    // NOTE that the only function being passed is the object constructor from before
    this.getValue = function() {
        return "My Value";
    };
});

mod.controller("MyController", function(myService) {
    console.log("MyController - myService: " + myService.getValue()); // CHANGED to call getValue()
});

mod.controller("MyController2", function(myService) {
    console.log("MyController2 - myService: " + myService.getValue()); // CHANGED to call getValue()
});