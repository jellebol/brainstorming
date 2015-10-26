brightstormApp.controller('DashboardCtrl', function($scope, $rootScope, $uibModal) {
    //console.log('dashboard');

    $scope.open = function (){
        $rootScope.user.programs.push({
            title:'Nieuw programma',
            status:'pending'
        })
    };

    $scope.addProgram = function () {

        var modalInstance = $uibModal.open({
            animation:false,
            templateUrl: '/app/js/modals/create-program-modal/create-program-modal.html',
            controller: 'createProgramModelCtrl',
            resolve: {
                items: function () {
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
});