var mod = angular.module("MyModule", []);

mod.factory("myProvider", function() { // CHANGED “provider" to “factory"
    console.log("Factory function called.");
    return "My Value";
});

mod.controller("MyController", function(myProvider) {
    console.log("MyController - myProvider: " + myProvider);
});

mod.controller("MyController2", function(myProvider) {
    console.log("MyController2 - myProvider: " + myProvider);
});