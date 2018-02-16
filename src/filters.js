(function() {
    'use strict';
    var app = angular.module('App');

    // No Syntax Highlighting - ouput directly to a pre
    app.filter('prettyJSON', function() {
            function prettyPrintJson(json) {
                return JSON ? JSON.stringify(json, null, '  ') : 'your browser doesnt support JSON so cant pretty print';
            }
            return prettyPrintJson;
        })
        // Syntax Highlighting - can be used with ng-bind-html on a pre
        .filter('prettify', function() {
            function syntaxHighlight(json) {
                if (json === undefined) return;
                if (typeof json === 'object') json = JSON.stringify(json, null, '   ');
                json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
                    var cls = 'number';
                    if (/^"/.test(match)) {
                        if (/:$/.test(match)) {
                            cls = 'key';
                        } else {
                            cls = 'string';
                        }
                    } else if (/true|false/.test(match)) {
                        cls = 'boolean';
                    } else if (/null/.test(match)) {
                        cls = 'null';
                    }
                    return '<span class="' + cls + '">' + match + '</span>';
                });
            }
            return syntaxHighlight;
        });
})();