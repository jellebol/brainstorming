angular.module('brightstormApp').controller('deleteProgramModelCtrl', function ($scope, $rootScope, $location, $uibModalInstance, program, index) {

    $scope.program = program;

    $scope.ok = function () {
        $rootScope.user.programs.splice(index, 1);
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});