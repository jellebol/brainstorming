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
                class:'theme-page-white theme-purple',
                title:'Hoe zorgen we dat er altijd plek is om te vergaderen?',
                description:'Bedenk zoveel mogelijk ideeën en schrijf elk idee apart op.',
                time:600,
                alarm:true
            }
        },{
            id:'discuss',
            type:'discuss',
            title:'Bespreek de ideeën',
            description:'Laat iedereen aan de beurt. Eventuele aanvullingen op ideeën mogen worden genoteerd.',
            time:600
        },{
            id:'whatif',
            type:'whatif',
            title:'Wat als...',
            description:'Gebruik je fantasie en kom in de juiste creatieve mindset. Begin met deze eenvoudige denkoefening',
            action:{
                id:'action-whatif',
                type:'action',
                parent:'whatif',
                class:'theme-brown',
                title:'Wat als iedereen een spion was?',
                description:'Wat zouden de gevolgen hiervan zijn? Bedenk zoveel mogelijk situaties.',
                time:300,
                alarm:true
            }
        },{
            id:'random',
            type:'random',
            title:'Willekeurige afbeelding',
            description:'Door je uitdaging te combineren met een willekeurige afbeelding dwing je jezelf om op een andere manier naar problemen te kijken.',
            action:{
                id:'action-whatif',
                type:'action',
                parent:'whatif',
                class:'theme-green',
                title:'Hoe zorgen we dat er altijd een plek is om te vergaderen?',
                slides:[
                    {
                        title:'Ga voor kwaliteit',
                        time:300
                    },
                    {
                        title:'Nog een slide',
                        time:300
                    },
                    {
                        title:'Nog een slide',
                        time:300,
                        alarm:true
                    }
                ]
            }
        }
    ];

    var currentObj = _.where($scope.steps, {id:$scope.page});
    $scope.currentIndex = _.findIndex($scope.steps, {id:$scope.page});

    $scope.current = currentObj[0];
    console.log($scope.currentIndex);

    $scope.next = function(option){
        if($scope.current.action && !$scope.action && option != 'skipAction') {
            $location.path('/program/' + $scope.program.id + '/' + $scope.current.id + '/' + $scope.current.action.id);
        } else {
            $scope.nextStep = $scope.steps[$scope.currentIndex + 1];
            $location.path('/program/' + $scope.program.id + '/' + $scope.nextStep.id);
        }
    };
    $scope.previous = function(){
        if($scope.action) {
            $scope.previousStep = _.where($scope.steps, {id : $scope.current.parent});
            $location.path('/program/' + $scope.program.id + '/' + $scope.current.id);
        } else {
            $scope.previousStep = $scope.steps[$scope.currentIndex - 1];
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