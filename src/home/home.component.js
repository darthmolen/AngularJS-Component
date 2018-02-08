(function() {
    angular.module('App')
        .component('home', {
            templateUrl: 'src/home/home.html',
            controller: 'homeController',
            controllerAs: 'vm'
        });
})();