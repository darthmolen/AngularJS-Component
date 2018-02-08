(function() {
    angular.module("App")
        .controller('serversController', serversController);

    serversController.$inject = ['$rootScope'];

    function serversController($rootScope) {
        vm = this;
    };
})();