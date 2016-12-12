define(['angularAMD'], function(angularAMD) {
    function routeconfig(a, b, c) {
        a.state('layout', {
            abstract: true,
            views: {
                '@': angularAMD.route({
                    templateUrl: '/resources/app/layout/layout.html',
                    //controller: 'layoutcontroller',
                    //controllerUrl: 'layoutcontroller'
                }),
                'top@layout': angularAMD.route({
                    templateUrl: '/resources/app/layout/topmenu/topmenu.html',
                    //controller: 'topmenucontroller',
                    //controllerUrl: 'topmenucontroller'
                }),
                'content@layout': angularAMD.route({})
            },
        });
        a.state('/', {
            url: '/',
            views: {
                'content@layout': angularAMD.route({
                    templateUrl: '/resources/app/modules/index.html',
                    controller: 'indexcontroller',
                    controllerUrl: 'indexcontroller'
                }),
            },
            parent: "layout",
        });
        b.otherwise("/");
    }
    return routeconfig;
});
