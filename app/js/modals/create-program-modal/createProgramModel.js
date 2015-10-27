angular.module('brightstormApp').controller('createProgramModelCtrl', function ($scope, $rootScope, $uibModalInstance, programs) {

    $scope.programs = programs;

    $scope.ok = function () {
        $rootScope.user.programs.push({
            title:$scope.program.title,
            status:'pending'
        });
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});