(function() {
    angular.module("App")
        .controller('heroController', heroController);

    heroController.$inject = ['$rootScope', 'githubService', 'bioService'];

    function heroController($rootScope, githubService, bioService) {
        vm = this;

        vm.$onInit = function() {
            vm.showJSON = false;
            vm.codeButtonText = "Show JSON";

            vm.buttonMap = new Map();
            vm.buttonMap.set(false, "Show JSON");
            vm.buttonMap.set(true, "Hide JSON");

            vm.codeButtonText = vm.buttonMap.get(false);

            githubService.getUserInfo(vm.userName).then(data => {
                vm.user = data;

                bioService.getPreferences(vm.user.login).then(data => {
                    vm.preferences = data;
                });
            });

        };

        vm.spinnerLoaded = function(spinner) {
            spinner.show();
        };

        vm.toggleCode = function(button) {
            vm.showJSON = !vm.showJSON;
            vm.codeButtonText = vm.buttonMap.get(vm.showJSON);
        }
    };
})();