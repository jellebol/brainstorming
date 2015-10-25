brightstormApp.controller('LoginCtrl', function($scope, $rootScope, $location) {
    console.log('login');

    $scope.login = {
        username:'test',
        password:'hahaaaaaaa',
        stay: true
    };

    $scope.enter = function(login){
        console.log(login);
        if(login.username == '' && login.password == '') {

        }
        $location.path('/dashboard');
    }
});