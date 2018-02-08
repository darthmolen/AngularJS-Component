(function() {
    angular.module("App")
        .controller('languagesController', languagesController);

    languagesController.$inject = ['$rootScope'];

    function languagesController($rootScope) {
        vm = this;

    };
})();