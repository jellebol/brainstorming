brightstormApp.controller('ProgramCtrl', function($scope, $rootScope, $routeParams, $uibModal) {
    $scope.program = _.find($rootScope.user.programs, 'id', Number($routeParams.id));
    $scope.page = $routeParams.page;

    console.log($scope.program);
    console.log($scope.page);

    $scope.steps = [
        {
            type:'start'
        },
        {
            type:'intro',
            time:10
        },
        {
            type:'rules',
            explain:{
                slides:[
                    {
                        title:'Ga voor kwaliteit',
                        subtitle:'Schrijf zoveel mogelijk ideeën op'
                    },
                    {
                        title:'Nog een slide'
                    }
                ]
            }
        },
        {
            type:'braindump'
        }
    ];

    $scope.current = $scope.steps[0];
    $scope.previous = false;
    $scope.next = $scope.steps[1];



    $scope.moreInfo = function () {
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
});