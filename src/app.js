(function() {
    angular.module("App", ['ui.router', 'angularSpinners']);

    var _component = app.component;
    app.component = function(name, options) {
        return _component(name, angular.extend({ controllerAs: 'vm' }, options));
    };
})();