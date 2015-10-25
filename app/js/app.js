var brainstormingApp = angular.module('brainstormingApp', [
    'ngRoute'
]);

brainstormingApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/login', {
            templateUrl: 'app/js/modules/login/login.html',
            controller: 'LoginCtrl'
        }).
        when('/dashboard', {
            templateUrl: 'app/js/modules/dashboard/dashboard.html',
            controller: 'DashboardCtrl'
        }).
        otherwise({
            redirectTo: '/login'
        });
}]);

brainstormingApp.run(function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function(ev,data) {
        if (data.$$route && data.$$route.controller)
            $rootScope.controller = data.$$route.controller;
    })
});

brainstormingApp.controller('MainCtrl', function($scope, $location) {

    $scope.location = $location.path();
});