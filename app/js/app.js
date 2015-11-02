var brightstormApp = angular.module('brightstormApp', [
    'ngRoute',
    'ui.bootstrap'
]);

brightstormApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/login', {
            templateUrl: 'app/js/modules/login/login.html',
            controller: 'LoginCtrl'
        }).
        when('/dashboard', {
            templateUrl: 'app/js/modules/dashboard/dashboard.html',
            controller: 'DashboardCtrl'
        }).
        when('/setup/:id/:page', {
            templateUrl: 'app/js/modules/setup/setup.html',
            controller: 'SetupCtrl'
        }).
        when('/overview/:id', {
            templateUrl: 'app/js/modules/overview/overview.html',
            controller: 'OverviewCtrl'
        }).
        when('/checklist/:id', {
            templateUrl: 'app/js/modules/checklist/checklist.html',
            controller: 'ChecklistCtrl'
        }).
        when('/program/:id/:page', {
            templateUrl: 'app/js/modules/program/program.html',
            controller: 'ProgramCtrl'
        }).
        otherwise({
            redirectTo: '/login'
        });
}]);

brightstormApp.run(function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function(ev,data) {
        if (data.$$route && data.$$route.controller)
            $rootScope.controller = data.$$route.controller;
    })
});

brightstormApp.controller('MainCtrl', function($scope, $rootScope, $location) {
    $rootScope.location = $location.path();

    $rootScope.user = {
        firstName:'Murielle',
        lastName:'Smit',
        programs:[{
            createdAt:new Date(),
            id:1,
            title: 'Brightstorming Demo',
            status:'concept',
            setup:[]
        }]
    };
});