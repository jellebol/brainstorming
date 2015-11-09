brightstormApp.controller('DashboardCtrl', function($scope, $rootScope, $uibModal) {
    //console.log('dashboard');

    $scope.addProgram = function () {
        var modalInstance = $uibModal.open({
            templateUrl: '/app/js/modals/create-program-modal/create-program-modal.html',
            controller: 'createProgramModelCtrl',
            resolve: {
                programs: function () {
                    return $rootScope.user.programs;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
//            $scope.selected = selectedItem;
        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    };

    $scope.deleteProgram = function (program, index) {
        var modalInstance = $uibModal.open({
            templateUrl: '/app/js/modals/delete-program-modal/delete-program-modal.html',
            controller: 'deleteProgramModelCtrl',
            resolve: {
                program: function () {
                    return program;
                },
                index: function () {
                    return index;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
//            $scope.selected = selectedItem;
        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    };
});