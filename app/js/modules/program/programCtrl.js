brightstormApp.controller('ProgramCtrl', function($scope, $rootScope, $routeParams, $uibModal) {
    $scope.program = _.find($rootScope.user.programs, 'id', Number($routeParams.id));
    $scope.page = $routeParams.page;

    console.log($scope.program);
    console.log($scope.page);

    $scope.steps = [
        {
            id:'start',
            type:'start'
        },{
            id:'intro',
            type:'intro',
            time:10
        },{
            id:'rules',
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
        },{
            id:'braindump',
            type:'braindump',
            action:{
                title:'Hoe zorgen we dat er altijd plek is om te vergaderen?',
                description:'Bedenk zoveel mogelijk ideeën en schrijf elk idee apart op.',
                time:10,
                alarm:true
            }
        },{
            id:'discuss',
            type:'discuss',
            time:10
        }
    ];

    var currentObj = _.where($scope.steps, {id:$scope.page});
    var currentIndex = _.findIndex($scope.steps, {id:$scope.page});

    $scope.current = currentObj[0];
    $scope.previous = $scope.steps[currentIndex - 1];
    $scope.next = $scope.steps[currentIndex + 1];
    console.log($scope.next);



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