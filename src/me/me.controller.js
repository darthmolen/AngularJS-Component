(function() {
    angular.module("App")
        .controller('meController', meController);

    meController.$inject = ['$rootScope'];

    function meController($rootScope) {
        vm = this;

    };
})();