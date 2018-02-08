(function() {
    angular.module("App")
        .controller('aboutController', aboutController);

    aboutController.$inject = ['$rootScope'];

    function aboutController($rootScope) {
        vm = this;
        vm.pageTitle = 'About';
    };
})();