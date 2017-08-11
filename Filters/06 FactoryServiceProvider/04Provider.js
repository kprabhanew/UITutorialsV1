var mod = angular.module("MyModule", []);
mod.provider("myProvider", function() {

    this.value = "My Value";

    this.setValue = function(newValue) {
        this.value = newValue;
    };

    this.$get = function() {
        return this.value;
    };
});

mod.controller("MyController", function(myProvider) {
    console.log("MyController - myProvider: " + myProvider);
});

mod.config(function(myProviderProvider) { // ADDED config section
    // Note the extra "Provider" suffix
    myProviderProvider.setValue("New Value");
});