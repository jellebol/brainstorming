brightstormApp.controller('ProgramCtrl', function($scope, $rootScope, $location, $routeParams, $uibModal) {
    $scope.program = _.find($rootScope.user.programs, 'id', Number($routeParams.id));
    $scope.page = $routeParams.page;
    $scope.action = $routeParams.action;

//    console.log($scope.program);
//    console.log($scope.page);

    $scope.steps = [
        {
            id:'start',
            type:'start'
        },{
            id:'intro',
            type:'intro',
            time:300
        },{
            id:'rules',
            type:'rules',
            title:'Brightstorm Spelregels',
            description:'Volledige vrijheid is niet altijd goed. Met beperkingen wordt je vindingrijk. Volg daarom de regels. Je zult zien dat je tot meer en betere ideeën komt.',
            explain:{
                id:'explain-rules',
                type:'explain',
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
            title:'Maak je hoofd leeg',
            description:'Voordat we beginnen gaan we eerst alle bestaande ideeën verzamelen. Zo gaan we allemaal met een leeg hoofd en frisse blik de Brightstorm in.',
            action:{
                id:'action-braindump',
                type:'action',
                parent:'braindump',
                title:'Hoe zorgen we dat er altijd plek is om te vergaderen?',
                description:'Bedenk zoveel mogelijk ideeën en schrijf elk idee apart op.',
                time:600,
                alarm:true
            }
        },{
            id:'discuss',
            type:'discuss',
            time:300
        }
    ];

    var currentObj = _.where($scope.steps, {id:$scope.page});
    var currentIndex = _.findIndex($scope.steps, {id:$scope.page});

    $scope.current = currentObj[0];
    console.log($scope.current);

    $scope.next = function(){
        if($scope.current.action && !$scope.action) {
            $location.path('/program/' + $scope.program.id + '/' + $scope.current.id + '/' + $scope.current.action.id);
        } else {
            $scope.nextStep = $scope.steps[currentIndex + 1];
            $location.path('/program/' + $scope.program.id + '/' + $scope.nextStep.id);
        }
    };
    $scope.previous = function(){
        if($scope.action) {
            $scope.previousStep = _.where($scope.steps, {id : $scope.current.parent});
            $location.path('/program/' + $scope.program.id + '/' + $scope.current.id);
        } else {
            $scope.previousStep = $scope.steps[currentIndex - 1];
            $location.path('/program/' + $scope.program.id + '/' + $scope.previousStep.id);
        }
    };

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

    $scope.closeProgram = function(){
        //todo: are you sure?
        $location.path('/dashboard');
    }
});