angular.module('brightstormApp').controller('closeProgramModelCtrl', function ($scope, $rootScope, $location, $uibModalInstance) {

    $scope.ok = function () {
        $uibModalInstance.close();
        $location.path('/dashboard');
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});