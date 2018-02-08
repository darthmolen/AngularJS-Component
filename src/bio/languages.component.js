(function() {
    angular.module('App')
        .component('languages', {
            bindings: {
                languages: '<'
            },
            templateUrl: 'src/bio/languages.html',
            controller: 'languagesController',
            controllerAs: 'vm'
        });
})();