require.config({
    baseUrl: "",
    paths: {
        'jQuery': "/bower_components/jquery/dist/jquery.min",
        'bootstrap': "/bower_components/bootstrap/dist/js/bootstrap.min",
        'angular': "/bower_components/angular/angular",
        'angularAMD': '/bower_components/angularAMD/angularAMD.min',
        'angular-ui-router': '/bower_components/angular-ui-router/release/angular-ui-router.min',
        'logicsclientportal': '/resources/app/logicsclientportal',
        'routeconfig': '/resources/app/routeconfig',
        'indexcontroller': '/resources/app/modules/indexcontroller',
    },
    shim: {
        'jQuery': {
            export: 'jQuery'
        },
        "angular": {
            exports: "angular"
        },
        'angular': ['jQuery'],
        'bootstrap': ['jQuery'],
        'angularAMD': ['angular'],
        'angular-ui-router': ['angular'],
        'routeconfig': ['angular'],
        'logicsclientportal': ['jQuery', 'bootstrap', 'angular'],
    },
    deps: ['logicsclientportal']
});
