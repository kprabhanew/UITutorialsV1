var app = angular.module('app', []);

app.controller('msg', ['$scope', function($scope) {

}]);

app.directive('message', function() {
    return {
        //return needs to be part of the compile
        compile: function(tElement, tAttributes) {
                console.log(tAttributes.text + '- In Compile');
                //Object is always going to be returned by the compiler
                //AJS Frame knows these(Pre/Post) needs to execute after the Controller
                //Controller is related to Directive , it is not related to the compilation
                //Controller always needs to be made available as part of directive return not part of compile retrun
                return {
                    //we have access to scope and the instance of template
                    pre: function(scope, iElement, iAttributes) {
                        console.log(iAttributes.text + "-In Pre");
                    },
                    post: function(scope, iElement, iAttributes) {
                        console.log(iAttributes.text + "- In Post");
                    }
                }
            }
            //Pre, Post, Controller always work on the instance
    }
});