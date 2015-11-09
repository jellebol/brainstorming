brightstormApp.controller('LoginCtrl', function($scope, $rootScope, $location) {
    console.log('login');

    $scope.login = {
        username:'jeroen@hatrabbits.com',
        password:'HatRabbits',
        stay: true
    };

    $scope.enter = function(login){
        var valid = false;
        if(login.username == 'jeroen@hatrabbits.com' && login.password == 'HatRabbits') {
            valid = true;
            $rootScope.user.firstName= 'Jeroen';
            $rootScope.user.lastName= 'de Ruijter';
        }
        if(login.username == 'rene@hatrabbits.com' && login.password == 'HatRabbits') {
            valid = true;
            $rootScope.user.firstName= 'Ren\xE9';
            $rootScope.user.lastName= 'de Ruijter';
        }
        if(login.username == 'rex@twnql.nl' && login.password == 'TWNQL') {
            valid = true;
            $rootScope.user = {
                firstName: 'Rex',
                lastName: 'Bierlaagh'
            }
        }
        if(valid){
            $location.path('/dashboard');
        } else {
            $scope.wrongLogin = true;
        }
    }
});