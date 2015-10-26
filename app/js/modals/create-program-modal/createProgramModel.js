angular.module('brightstormApp').controller('createProgramModelCtrl', function ($scope, $uibModalInstance, items) {

    $scope.items = items;

    $scope.ok = function () {
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});