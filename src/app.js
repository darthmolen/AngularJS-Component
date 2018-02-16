// All code gets formatted in to IIFE
// https://medium.com/@vvkchandra/essential-javascript-mastering-immediately-invoked-function-expressions-67791338ddc6
(function() {
    // Personal preference. I like to separate my instantiation of my module 
    // from my configuration Configuration happens in main.js
    var app = angular.module("App", ['ui.router', 'angularSpinners']);

    var _component = app.component;
    app.component = function(name, options) {
        return _component(name, angular.extend({ controllerAs: 'vm' }, options));
    };
})();