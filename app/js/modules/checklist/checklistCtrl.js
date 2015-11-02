brightstormApp.controller('ChecklistCtrl', function($scope, $rootScope, $routeParams, $location, $uibModal) {
    $scope.program = _.find($rootScope.user.programs, 'id', Number($routeParams.id));

    $scope.checks = [
        {
            label:'Locatie met tafels'
        },
        {
            label:'Post-its of kaartjes'
        },
        {
            label:'Pennen / stiften'
        },
        {
            label:'Koffie, thee & water'
        },
        {
            label:'(Dia)scherm'
        },
        {
            label:'Beamer / computer'
        },
        {
            label:'Internetverbinging'
        },
        {
            label:'Fruit / snoep'
        }
    ]
});