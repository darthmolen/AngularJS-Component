(function() {
    angular.module('App')
        .component('me', {
            bindings: {
                me: '<'
            },
            templateUrl: 'src/me/me.html',
            controller: 'meController',
            controllerAs: 'vm'
        });
})();