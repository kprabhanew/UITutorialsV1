var mod = angular.module("MyModule", []);

function MyObject() { // ADDED our object constructor
    this.getValue = function() {
        return "My Value";
    };
}

mod.factory("myProvider", function() {
    console.log("Factory function called.");
    return new MyObject(); // CREATE an instance of our object
});

mod.controller("MyController", function(myProvider) {
    console.log("MyController - myProvider: " + myProvider.getValue()); // CHANGED to call getValue()
});

mod.controller("MyController2", function(myProvider) {
    console.log("MyController2 - myProvider: " + myProvider.getValue()); // CHANGED to call getValue()
    console.log('******************************')
});
/**************************************************************************/
mod.factory("myProvider2", function() {
    console.log("Factory function called.");
    return new function() { // INLINED our object constructor
        this.getValue = function() {
            return "My Value";
        };
    };
});

mod.controller("MyCtrl", function(myProvider2) {
    console.log("MyCtrl - myProvider2: " + myProvider2.getValue());
});

mod.controller("MyCtrl2", function(myProvider2) {
    console.log("MyCtrl2 - myProvider2: " + myProvider2.getValue());
});