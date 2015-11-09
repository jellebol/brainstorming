angular.module('brightstormApp').controller('focusModelCtrl', function ($scope, $rootScope, $location, $uibModalInstance) {
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});