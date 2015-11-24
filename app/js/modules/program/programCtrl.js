brightstormApp.controller('ProgramCtrl', function($scope, $rootScope, $location, $routeParams, $timeout, $interval, $uibModal) {
    $scope.program = _.find($rootScope.user.programs, 'id', Number($routeParams.id));
    $scope.page = $routeParams.page;
    $scope.action = $routeParams.action;

    if(!$rootScope.user.soundOff) {
        $rootScope.user.soundOff = false;
    }

//    console.log($scope.program);
//    console.log($scope.page);

    $scope.steps = [
        {
            id:'start',
            type:'start'
        },{
            id:'intro',
            type:'intro',
            time:300,
            title:'Waar gaan we vandaag over nadenken?',
            description:'Bespreek kort de uitdaging.'
        },{
            id:'rules',
            type:'rules',
            title:'Brightstorm Spelregels',
            description:'Volledige vrijheid is niet altijd goed. Met beperkingen wordt je vindingrijk. Volg daarom de regels. Je zult zien dat je tot meer en betere idee\353n komt.',
            explain:{
                id:'explain-rules',
                type:'explain',
                exitToNext:true,
                slides:[
                    {
                        title:'Ga voor kwaliteit',
                        subtitle:'Schrijf zoveel mogelijk idee\353n op. Hoe meer idee\353n je hebt hoe groter de kans dat je iets geniaals tegen komt.'
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
                theme:'theme-page-white theme-blue-medium',
                name:'Ophaalronde',
                title:$scope.program.focus,
                description:'Welke idee\353n heb je al voor deze<br/>uitdaging? Noteer zoveel mogelijk idee\353n<br/>en schrijf elk idee apart op.',
                time:2,
//                time:600,
                timerType: 'Individueel',
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
                theme:'theme-brown-light',
                name:'Warming up oefening',
                title:'Wat als iedereen een spion was?',
                description:"Wat zouden de gevolgen hiervan zijn? <br/>Bespreek in de groep de mogelijke scenario's.",
                time:300,
                alarm:true
            }
        },{
            id:'continue',
            type:'continue',
            title:'Klaar voor het echte werk?',
            description:"Alle huidige idee\353n zijn genoteerd en de deelnemers zijn opgewarmd. Nu is het tijd om aan de slag te gaan met creatieve denktechnieken.",
            theme:'theme-purple-soft'
        },{
            id:'quote',
            type:'quote',
            title:'Creativiteit is intelligentie die plezier heeft.',
            description:'Albert Einstein',
            time:6,
            theme:'theme-pink'
        },{
            id:'random',
            type:'random',
            title:'Willekeurige afbeelding',
            description:'Door je uitdaging te combineren met een willekeurige afbeelding dwing je jezelf om op een andere manier naar problemen te kijken.',
            action:{
                id:'action-whatif',
                type:'action',
                timerType:"Duo's",
                parent:'whatif',
                theme:'theme-green',
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
                exitToNext:'startAction',
                slides:[
                    {
                        name:'Uitleg',
                        title:'Voorbeeld',
                        subtitle:'Stel je wilt een nieuw soort tafel ontwerpen en je gebruikt de techniek: "willekeurige afbeelding".'
                    },{
                        name:'Stap 1 / 3',
                        title:'Neem een willekeurige afbeelding',
                        subtitle:'Stel je neemt een plaatje van een olifant. Kenmerken: slurf, log, zwaar, grote oren, slagtanden etc.'
                    },{
                        name:'Stap 2 / 3',
                        title:'Kies \xE9\xE9n kenmerk',
                        subtitle:'Je kiest \xE9\xE9n kenmerk (bijvoorbeeld "Slurf") en gebruikt deze om idee\353n mee te bedenken.'
                    },{
                        name:'Stap 3 / 3',
                        title:'Bedenk idee\353n',
                        subtitle:'Wat kun je bedenken met je gekozen kenmerk? (Wees creatief en laat je inspireren)'
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
            id:'quote2',
            type:'quote',
            title:'Voor goede idee\353n, heb je veel idee\353n nodig.',
            description:'Linus Pauling',
            time:6
        },{
            id:'scamper',
            type:'scamper',
            title:'Wat kunnen we <span class="uppercase white">verwijderen</span> om ons doel te bereiken?',
            description:'Bedenk zoveel mogelijk idee\353n en schrijf elk idee apart op.',
            time:300,
            timerType:"Duo's",
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
            id:'continue2',
            type:'continue',
            title:'Klaar om verder te gaan?',
            description:"Wissel van plek en vorm nieuwe duo's",
            theme:'theme-orange'
        },{
            id:'quote3',
            type:'quote',
            title:'Een vernieuwend idee ziet er altijd gek uit.',
            description:'Alfred North Whitehead',
            time:6,
            theme:'theme-purple'
        },{
            id:'wrong',
            type:'wrong',
            theme:'theme-green',
            title:'Foute regel',
            description:'Wanneer je een regel uit een totaal andere context toepast op je uitdaging kun je tot verrassende inzichren en spannende idee\353n komen.',
            action:{
                id:'action-wrong',
                type:'action',
                timerType:"Duo's",
                time:600,
                parent:'wrong',
                theme:'theme-fuchsia',
                title:'Na openen koel bewaren'
            },
            explain:{
                id:'explain-random',
                type:'explain',
                exitToNext:'startAction',
                slides:[
                    {
                        name:'Uitleg',
                        title:'Voorbeeld',
                        subtitle:'Stel je wilt een nieuw soort tafel ontwerpen en je gebruikt de techniek: "willekeurige afbeelding".'
                    },{
                        name:'Stap 1 / 3',
                        title:'Neem een willekeurige afbeelding',
                        subtitle:'Stel je neemt een plaatje van een olifant. Kenmerken: slurf, log, zwaar, grote oren, slagtanden etc.'
                    },{
                        name:'Stap 2 / 3',
                        title:'Kies \xE9\xE9n kenmerk',
                        subtitle:'Je kiest \xE9\xE9n kenmerk (bijvoorbeeld "Slurf") en gebruikt deze om idee\353n mee te bedenken.'
                    }
                ]
            }
        },{
            id:'discuss4',
            type:'discuss',
            title:'Bespreek de idee\353n',
            description:'Laat iedereen aan de beurt. Eventuele aanvullingen op idee\353n mogen worden genoteerd.',
            time:600
        },{
            id:'switch',
            type:'switch',
            theme:'theme-brown',
            time:300,
            title:'Ga op een andere plek zitten, naast iemand anders.',
            description:'Nieuwe denkpartner, nieuwe idee\353n.'
        },{
            id:'quote4',
            type:'quote',
            title:'Buiten de wet en de wetenschap zijn alle regels te breken.',
            description:'Tim Ferriss',
            time:6,
            theme:'theme-dark'
        },{
            id:'wish',
            type:'wish',
            theme:'theme-ocean',
            title:'Wensdroom',
            description:'Fantaseer over een ideale, maar onrealistische, situatie en gebruik dit als inspiratie voor fantastische idee\353n.',
            action:{
                id:'action-wish',
                type:'action',
                timerType:"Duo's",
                parent:'wish',
                theme:'theme-purple',
                title:$scope.program.focus,
                slides:[
                    {
                        title:'Beschrijf een onrealistische wensdroom',
                        description:'Zou het niet fantastisch zijn als...',
                        time:120
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
                exitToNext:'startAction',
                slides:[
                    {
                        name:'Uitleg',
                        title:'Voorbeeld',
                        subtitle:'Stel je wilt een nieuw soort tafel ontwerpen en je gebruikt de techniek: "willekeurige afbeelding".'
                    },{
                        name:'Stap 1 / 3',
                        title:'Neem een willekeurige afbeelding',
                        subtitle:'Stel je neemt een plaatje van een olifant. Kenmerken: slurf, log, zwaar, grote oren, slagtanden etc.'
                    },{
                        name:'Stap 2 / 3',
                        title:'Kies \xE9\xE9n kenmerk',
                        subtitle:'Je kiest \xE9\xE9n kenmerk (bijvoorbeeld "Slurf") en gebruikt deze om idee\353n mee te bedenken.'
                    },{
                        name:'Stap 3 / 3',
                        title:'Bedenk idee\353n',
                        subtitle:'Wat kun je bedenken met je gekozen kenmerk? (Wees creatief en laat je inspireren)'
                    }
                ]
            }
        },{
            id:'end',
            type:'end',
            title:'Genoeg idee\353n <br/>nu aan de slag',
            description:'Beoordeel de idee\353n & bespreek de opvolging'
        }
    ];

    //set percentage width for process bar
    $scope.calcProgress = function (){
        var length = $scope.steps.length;
        var stepIndex = _.findIndex($scope.steps, 'id', $routeParams.page) + 1;
        var percentage = (stepIndex / length) * 100;
        console.log(length, stepIndex, percentage);
        var prevPercentage = $rootScope.savedPercentage || 0;
        $scope.percentage = Math.ceil(prevPercentage) + '%';
        $timeout(function(){
            $scope.percentage = Math.ceil(percentage) + '%';
        },50);
        $rootScope.savedPercentage = percentage;
    };
    $scope.calcProgress();


    //OWL FUNCTIONS
    //initialize action slides
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
    //initialize explain carousel
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

    //current program page
    $scope.current = currentObj[0];
//    console.log($scope.currentIndex);

    $scope.next = function(option){
//        if($scope.current.action && !$scope.action && option != 'skipAction') {
        if(option == 'startAction') {
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
        if($scope.current.action && $scope.current.action.slides) {
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
        } else {
            if(($scope.current.action && $scope.current.action.alarm) || $scope.current.alarm) {
                $timeout(function(){
                    $scope.alarm = true;
                },1000);
            } else {
                $timeout(function(){
                    $scope.next(args);
                },1000);
            }
        }

        /*if(!$scope.current.action.slides) {
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
        }*/
    });

    //open or close explain page
    $scope.explainFn = {
        open:function(){
            $scope.explain = true;
        },
        close:function(exitToNext){
            $scope.explain = false;
            if(exitToNext){
                $scope.next(exitToNext);
            }
        }
    };

    //turn alarm sound on or off
    $scope.sound = {
        turnOn:function(){
            $rootScope.user.soundOff = false;
        },
        turnOff:function(){
            console.log('off');
            $rootScope.user.soundOff = true;
        }
    };

    //pause timer
    $scope.pause = function(){
        $rootScope.$broadcast('pause');
        $scope.paused = true;
    };

    //play timer
    $scope.play = function(){
        $rootScope.$broadcast('play');
        $scope.paused = false;
    };

    //get current time and update every 30 seconds
    $scope.date = new Date();
    $interval(function () {
        $scope.date = new Date();
    }, 30000);

    $scope.closeProgram = function () {
        event.preventDefault();
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