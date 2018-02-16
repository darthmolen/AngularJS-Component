(function() {
    angular.module('App')
        .component('hero', {
            bindings: {
                userName: '<'
            },
            templateUrl: 'src/hero/hero.html',
            controller: 'heroController',
            controllerAs: 'vm'
        });
})();