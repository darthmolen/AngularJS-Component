(function() {
    angular.module('App')
        .component('servers', {
            bindings: {
                servers: '<'
            },
            templateUrl: 'src/bio/servers.html',
            controller: 'serversController',
            controllerAs: 'vm'
        });
})();