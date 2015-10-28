angular.module('brightstormApp').controller('createProgramModelCtrl', function ($scope, $rootScope, $uibModalInstance, programs) {

    $scope.programs = programs;

    $scope.ok = function () {
        var program = {
            createdAt:new Date(),
            id:$rootScope.user.programs.length + 1,
            title: $scope.program.title,
            status: 'concept',
            setup: []
        };
        $rootScope.user.programs.push(program);
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});