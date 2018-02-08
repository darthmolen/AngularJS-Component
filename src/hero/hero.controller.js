(function() {
    angular.module("App")
        .controller('heroController', heroController);

    heroController.$inject = ['$rootScope', 'githubService'];

    function heroController($rootScope, githubService) {
        vm = this;
        vm.$onInit = function() {
            githubService.getUserInfo(vm.userName).then(data => {
                vm.user = data;
            });
        };

        vm.spinnerLoaded = function(spinner) {
            spinner.show();
        };
    };
})();