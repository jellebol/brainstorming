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

    $scope.location = $location.path();

    $rootScope.user = {
        firstName:'Murielle',
        lastName:'Smit',
        programs:[{
            createdAt:new Date(),
            id:1,
            title: 'Test program',
            status:'concept',
            setup:[]
        }]
    };
});