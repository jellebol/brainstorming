brightstormApp.controller('ProgramCtrl', function($scope, $rootScope, $location, $routeParams, $timeout, $uibModal) {
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
            description:'Volledige vrijheid is niet altijd goed. Met beperkingen wordt je vindingrijk. Volg daarom de regels. Je zult zien dat je tot meer en betere idee\353n komt.',
            explain:{
                id:'explain-rules',
                type:'explain',
                slides:[
                    {
                        title:'Ga voor kwaliteit',
                        subtitle:'Wat kun je bedenken met je gekozen kenmerk?  (Wees creatief en laat je inspireren)'
                    },{
                        title:'Stel je oordeel uit',
                        subtitle:'Het evalueren van idee\353n komt na de creatieve fase. Tijdens de brainstorm is het leveren van kritiek verboden.'
                    },{
                        title:'Ga voor originaliteit',
                        subtitle:'Laat je niet beperken door de werkelijkheid. Tijdens het brainstormen zijn we juist opzoek naar gekke idee\353n.'
                    },{
                        title:'Gebruik idee\353n als springplank',
                        subtitle:'Het is makkelijker om een gek idee realistisch te maken dan om een saai idee spannend te maken.'
                    },{
                        title:'Schrijf elk idee op',
                        subtitle:'Elk idee is waardevol. Een idee dat jij niet bijzonder vindt brengt iemand anders wellicht wel op idee\353n.'
                    }
                ]
            }
        },{
            id:'braindump',
            type:'braindump',
            title:'Maak je hoofd leeg',
            description:'Voordat we beginnen gaan we eerst alle bestaande idee\353n verzamelen. Zo gaan we allemaal met een leeg hoofd en frisse blik de Brightstorm in.',
            action:{
                id:'action-braindump',
                type:'action',
                parent:'braindump',
                class:'theme-page-white theme-purple',
                title:$scope.program.focus,
                description:'Bedenk zoveel mogelijk idee\353n en schrijf elk idee apart op.',
                time:600,
                alarm:true
            }
        },{
            id:'discuss',
            type:'discuss',
            title:'Bespreek de idee\353n',
            description:'Laat iedereen aan de beurt. Eventuele aanvullingen op idee\353n mogen worden genoteerd.',
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
                title:$scope.program.focus,
                slides:[
                    {
                        title:'Noteer vijf kenmerken van het object op de foto.',
                        time:120,
                        img:'/app/img/random/lemons.JPG'
                    },
                    {
                        title:'Kies \xE9\xE9n kenmerk.',
                        time:30,
                        img:'/app/img/random/lemons.JPG'
                    },
                    {
                        title:'Bedenk zoveel mogelijk idee\353n aan de hand van je kenmerk.',
                        time:300,
                        alarm:true,
                        img:'/app/img/random/lemons.JPG'
                    }
                ]
            },
            explain:{
                id:'explain-random',
                type:'explain',
                slides:[
                    {
                        title:'Bedenk idee\353n',
                        subtitle:'Wat kun je bedenken met je gekozen kenmerk?  (Wees creatief en laat je inspireren)'
                    },{
                        title:'Stel je oordeel uit',
                        subtitle:'Het evalueren van idee\353n komt na de creatieve fase. Tijdens de brainstorm is het leveren van kritiek verboden.'
                    },{
                        title:'Ga voor originaliteit',
                        subtitle:'Laat je niet beperken door de werkelijkheid. Tijdens het brainstormen zijn we juist opzoek naar gekke idee\353n.'
                    },{
                        title:'Gebruik idee\353n als springplank',
                        subtitle:'Het is makkelijker om een gek idee realistisch te maken dan om een saai idee spannend te maken.'
                    }
                ]
            }
        },{
            id:'discuss2',
            type:'discuss',
            title:'Bespreek de idee\353n',
            description:'Laat iedereen aan de beurt. Eventuele aanvullingen op idee\353n mogen worden genoteerd.',
            time:600
        },{
            id:'quote',
            type:'quote',
            title:'Voor goede idee\353n, heb je idee\353n nodig.',
            description:'Linus Pauling',
            time:600
        },{
            id:'scamper',
            type:'scamper',
            title:'Wat gebeurd er als we de volgorde omdraaien?',
            description:'Bedenk zoveel mogelijk idee\353n en schrijf elk idee apart op.',
            time:300,
            alarm:true
        },{
            id:'discuss3',
            type:'discuss',
            title:'Bespreek de idee\353n',
            description:'Laat iedereen aan de beurt. Eventuele aanvullingen op idee\353n mogen worden genoteerd.',
            time:600
        },{
            id:'break',
            type:'break',
            title:'Korte pauze',
            description:'Tijd om de hersentjes te laten afkoelen, koffie te halen of eventjes de benen te strekken.',
            time:600
        },{
            id:'quote2',
            type:'quote',
            title:'Een vernieuwend idee ziet er altijd gek uit.',
            description:'Alfred North Whitehead',
            time:600
        }
    ];


    //OWL FUNCTIONS
    $scope.initSlides = function(){
        var owl = $('#action-slides-carousel');
        owl.owlCarousel({
            responsive:{
                0:{
                    items:1
                }
            },
            dots:false,
            nav:true,
            navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
        });

        $scope.activeIndex = 0;

        owl.on('changed.owl.carousel', function(event) {
            $scope.activeIndex = event.item.index;
            $timeout(function() {
                $scope.$apply();
            },0);
        })
    };
    $scope.initExplain = function(){
        var owl = $('#explain-slides-carousel');
        owl.owlCarousel({
            responsive:{
                0:{
                    items:1
                }
            },
            dots:true,
            nav:true,
            navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
        });
    };

    var currentObj = _.where($scope.steps, {id:$scope.page});
    $scope.currentIndex = _.findIndex($scope.steps, {id:$scope.page});

    $scope.current = currentObj[0];
//    console.log($scope.currentIndex);

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

    $scope.$on('nextPage', function(event, args) {
        if(!$scope.current.action.slides) {
            if(($scope.current.action && $scope.current.action.alarm) || $scope.current.alarm) {
                $timeout(function(){
                    $scope.alarm = true;
                },1000);
            } else {
                $timeout(function(){
                    $scope.next(args);
                },1000);
            }
        } else {
            //next slide
            if($scope.activeIndex == ($scope.current.action.slides.length - 1)){
                $timeout(function(){
                    $scope.alarm = true;
                },1000);
            } else {
                $timeout(function(){
                    $('#action-slides-carousel').trigger('next.owl.carousel');
                },1000);
            }
        }
    });

    $scope.explainFn = {
        open:function(){
            $scope.explain = true;
        },
        close:function(){
            $scope.explain = false;
        }
    };

    $scope.pause = function(){
        $rootScope.$broadcast('pause');
        $scope.paused = true;
    };

    $scope.play = function(){
        $rootScope.$broadcast('play');
        $scope.paused = false;
    };

    $scope.closeProgram = function () {
        var modalInstance = $uibModal.open({
            templateUrl: '/app/js/modals/close-program-modal/close-program-modal.html',
            controller: 'closeProgramModelCtrl'
        });

        modalInstance.result.then(function (selectedItem) {
//            $scope.selected = selectedItem;
        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    }
});