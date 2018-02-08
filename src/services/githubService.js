(function() {
    angular.module("App").service('githubService', githubService);
    githubService.$inject = ['$http', '$q', 'spinnerService'];

    function githubService($http, $q, spinnerService) {
        var gitUserUrl = 'https://api.github.com/users/';
        var gitUserRepo = '/repos';

        var getUserInfo = function(userName) {
            var url = gitUserUrl + userName;
            return getPromise(url);
        };

        var getUserRepos = function(userName) {
            var url = gitUserRepo + userName + gitUserRepo;
            return getPromise(url);
        };

        var getPromise = function(url) {
            return $http.get(url)
                .then(
                    function(response) {
                        return response.data;
                    },
                    function(error) {
                        spinnerService.hideAll();
                        return $q.reject(error.data.Message);
                    }
                );
        };

        return {
            getUserInfo: getUserInfo,
            getUserRepos: getUserRepos
        };
    }
})();