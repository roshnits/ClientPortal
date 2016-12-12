require.config({
    baseUrl: '/',
    packages: [{
        name: 'moment',
        // This location is relative to baseUrl. Choose bower_components
        // or node_modules, depending on how moment was installed.
        location: 'bower_components/moment/min/',
        main: 'moment.min'
    }, {
        name: 'numeral',
        // This location is relative to baseUrl. Choose bower_components
        // or node_modules, depending on how moment was installed.
        location: 'bower_components/numeral/min/',
        main: 'numeral.min'
    }, {
        name: 'lodash',
        // This location is relative to baseUrl. Choose bower_components
        // or node_modules, depending on how moment was installed.
        location: 'bower_components/lodash/dist/',
        main: 'lodash.min'
    }, {
        name: 'is',
        // This location is relative to baseUrl. Choose bower_components
        // or node_modules, depending on how moment was installed.
        location: 'bower_components/is_js/',
        main: 'is.min'
    }],
    paths: {
        //components
        'jQuery': 'bower_components/jquery/dist/jquery.min',
        'bootstrap': 'bower_components/bootstrap/dist/js/bootstrap.min',
        'angular': 'bower_components/angular/angular.min',
        'angularAMD': 'bower_components/angularAMD/angularAMD.min',
        'angular-ui-router': 'bower_components/angular-ui-router/release/angular-ui-router.min',
        //base module
        'logicsclientportal': 'resources/app/logicsclientportal',
        //route module
        'routeconfig': 'resources/app/routeconfig',
        //controllers
        'indexcontroller': 'resources/app/modules/indexcontroller',
        //factory
        'commonfactory': 'resources/app/commonfactory'
    },
    shim: {
        'jQuery': {
            export: 'jQuery'
        },
        'angular': {
            exports: 'angular'
        },
        'angular': ['jQuery'],
        'bootstrap': ['jQuery'],
        'angularAMD': ['angular'],
        'angular-ui-router': ['angular'],
        'routeconfig': ['angular'],
        'logicsclientportal': ['jQuery', 'bootstrap', 'angular', 'commonfactory'],
    },
    deps: ['logicsclientportal']
});
