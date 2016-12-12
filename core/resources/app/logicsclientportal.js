define(['angularAMD', 'routeconfig', 'angular-ui-router', 'commonfactory'], function(angularAMD, routeconfig, uirouter, cf) {
    'use strict';
    var logicsclientportal = angular.module('logicsclientportal', ['ui.router']);
    logicsclientportal.factory('commonfactory', [cf]);
    logicsclientportal.config(['$httpProvider', '$stateProvider', '$urlRouterProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
        function(a, b, c, d, e, f, g) {
            logicsclientportal.register = {
                controller: d.register,
                directive: e.directive,
                filter: f.register,
                factory: g.factory,
                service: g.service,
                constant: g.constant
            };
            routeconfig(b, c, a);
        }
    ]);
    logicsclientportal.run(['$rootScope', '$state', '$http', '$q',
        function(a, b, c, d) {
            c.defaults.headers.common['UTCOffset'] = (new Date().getTimezoneOffset());
        }
    ]);
    angularAMD.bootstrap(logicsclientportal);
    return logicsclientportal;
});
