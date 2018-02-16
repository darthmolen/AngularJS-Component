// Service that uses the "Revealing Module" pattern
// http://jargon.js.org/_glossary/REVEALING_MODULE_PATTERN.md
(function() {
    angular.module("App").service('bioService', function() {
        // Great example of a stub that can then morph into real calls
        var languages = ['Angularjs', 'C#', 'React', 'TSQL', 'ASP.NET', 'Core 2.0'];
        var servers = ['Microsoft Sql Server', 'Docker', 'Azure'];
        var twitch = 'https://www.twitch.tv/xdarthmolenx';
        var twitter = 'https://twitter.com/darthmolen';
        var wishList = 'https://www.amazon.com/gp/registry/wishlist/2YVO6LUYSQKX';

        var getServers = function() {
            return new Promise((resolve, reject) => { resolve(servers); });
        };
        var getLanguages = function() {
            return new Promise((resolve, reject) => { resolve(languages); });
        };

        var getPreferences = function(userName) {
            var preferences = { twitter: twitter, wishlist: wishList, twitch: twitch };
            return new Promise((resolve, reject) => { resolve(preferences); });
        };

        return {
            getServers: getServers,
            getLanguages: getLanguages,
            getPreferences: getPreferences
        };
    });
})();