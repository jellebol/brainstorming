brightstormApp.controller('SetupCtrl', function($scope, $rootScope, $routeParams, $location, $uibModal) {
    $scope.program = _.find($rootScope.user.programs, 'id', Number($routeParams.id));
    $scope.page = $routeParams.page;
    console.log($scope.program);

    $scope.setupPick = function (choice) {
        switch ($scope.page) {
            case 1:
                $scope.program.duration = choice;
                break;
            case 2:
                $scope.program.participants = choice;
                break;
            case 3:
                $scope.program.level = choice;
                break;
            case 4:
                $scope.program.subject = choice;
                break;
            case 5:
                $scope.program.focus = $scope.focus;
                break;
        }

        var nextPage = Number($routeParams.page) + 1;
        if($scope.page != 6)
            $location.path('/setup/' + ($scope.program.id) + '/' + nextPage);
    }
});