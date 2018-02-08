(function() {
    angular.module('App')
        .component('about', {
            templateUrl: 'src/about/about.html',
            controller: 'aboutController',
            controllerAs: 'vm'
        });
})();