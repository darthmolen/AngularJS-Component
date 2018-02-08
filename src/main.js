(function() {
    angular.module('App')
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');

            $stateProvider

            // HOME STATES AND NESTED VIEWS ========================================
                .state('home', {
                url: '/home',
                views: {
                    '': { component: 'home' },
                    'tech@home': { templateUrl: 'src/home/partial-tech.html' }
                }
            })

            // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
            // Notice the resolve is at the state level (not the named view level)
            // also, we can use a regular service here instead of a provider because this resolve happens later
            // normally, any service that gets used in .config needs to be a provider
            .state('about', {
                url: '/about',
                views: {
                    '': { component: 'about' },
                    'bio@about': { templateUrl: 'src/bio/me.html' },
                    'columnOne@about': {
                        component: 'servers'
                    },
                    'columnTwo@about': {
                        component: 'languages'
                    }
                },
                resolve: {
                    servers: function(bioService) {
                        return bioService.getServers();
                    },
                    languages: function(bioService) {
                        return bioService.getLanguages();
                    }
                }
            });
        });
})();