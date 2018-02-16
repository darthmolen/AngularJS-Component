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
            .state('about', {
                url: '/about',
                views: {
                    '': { component: 'about' },
                    // named views are suffixed by their component they are nested in
                    // bio@about is an example of a partial that didn't need a component or controller
                    'bio@about': { templateUrl: 'src/bio/me.html' },
                    'columnOne@about': {
                        component: 'servers'
                    },
                    'columnTwo@about': {
                        component: 'languages'
                    }
                },
                // the resolve is at the state level (not the named view level)
                resolve: {
                    // these are normal services and not providers because resolve gets called later
                    // normally, any service that gets used in .config needs to be a provider
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