(function() {
    angular.module("App")
        .controller('homeController', homeController);

    homeController.$inject = ['$rootScope'];

    function homeController($rootScope) {
        vm = this;
        vm.pageTitle = 'Home';
    };
})();