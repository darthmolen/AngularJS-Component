// Service that uses the "Revealing Module" pattern
// http://jargon.js.org/_glossary/REVEALING_MODULE_PATTERN.md
(function() {
    angular.module("App").service('bioService', function() {
        // Great example of a stub that can then morph into real calls
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