(function() {
    angular.module("App").service('bioService', function() {
        var languages = ['Angularjs', 'C#', 'React', 'TSQL', 'ASP.NET', 'Core 2.0'];
        var servers = ['Microsoft Sql Server', 'Docker', 'Azure'];
        var getServers = function() {
            return new Promise((resolve, reject) => { resolve(servers); });
        };
        var getLanguages = function() {
            return new Promise((resolve, reject) => { resolve(languages); });
        };

        return {
            getServers: getServers,
            getLanguages: getLanguages
        };
    });
})();