brightstormApp.controller('ProgramCtrl', function($scope, $rootScope, $location, $routeParams, $timeout, $interval, $uibModal) {
    $scope.program = _.find($rootScope.user.programs, 'id', Number($routeParams.id));
    $scope.page = $routeParams.page;
    $scope.action = $routeParams.action;

    if(!$rootScope.user.soundOff) {
        $rootScope.user.soundOff = false;
    }

//    console.log($scope.program);
//    console.log($scope.page);
    var steps = {
        start: {
            id:'start',
            type:'start'
        },
        intro: {
            id:'intro',
            type:'intro',
            time:300,
            title:'Waar gaan we vandaag over nadenken?',
            description:'Bespreek kort de uitdaging.'
        },
        rules: {
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
                        title:'Ga voor kwantiteit',
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
        },
        braindump: {
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
//                time:2,
                time:600,
                timerType: 'Individueel',
                alarm:true
            }
        },
        discuss: {
            id:'discuss',
            type:'discuss',
            title:'Bespreek de idee\353n',
            description:'Laat iedereen aan de beurt. Eventuele aanvullingen op idee\353n mogen worden genoteerd.',
            time:600
        },
        whatif: {
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
        },
        continue: {
            id:'continue',
            type:'continue',
            title:'Klaar voor het echte werk?',
            description:"Alle huidige idee\353n zijn genoteerd en de deelnemers zijn opgewarmd. Nu is het tijd om aan de slag te gaan met creatieve denktechnieken.",
            theme:'theme-purple-soft'
        },
        quote: {
            id:'quote',
            type:'quote',
            title:'Creativiteit is intelligentie die plezier heeft.',
            description:'Albert Einstein',
            time:6,
            theme:'theme-pink'
        },
        random: {
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
                        img:'/app/img/random/lemons.png'
                    },
                    {
                        title:'Kies \xE9\xE9n kenmerk.',
                        time:30,
                        img:'/app/img/random/lemons.png'
                    },
                    {
                        title:'Bedenk zoveel mogelijk idee\353n aan de hand van je kenmerk.',
                        time:300,
                        alarm:true,
                        img:'/app/img/random/lemons.png'
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
        },
        discuss2: {
            id:'discuss2',
            type:'discuss',
            title:'Bespreek de idee\353n',
            description:'Laat iedereen aan de beurt. Eventuele aanvullingen op idee\353n mogen worden genoteerd.',
            time:600
        },
        quote2: {
            id:'quote2',
            type:'quote',
            title:'Voor goede idee\353n, heb je veel idee\353n nodig.',
            description:'Linus Pauling',
            time:6
        },
        scamper: {
            id:'scamper',
            type:'scamper',
            title:'Wat kunnen we <span class="uppercase white">verwijderen</span> om ons doel te bereiken?',
            description:'Bedenk zoveel mogelijk idee\353n en schrijf elk idee apart op.',
            time:300,
            timerType:"Duo's",
            alarm:true
        },
        discuss3: {
            id:'discuss3',
            type:'discuss',
            title:'Bespreek de idee\353n',
            description:'Laat iedereen aan de beurt. Eventuele aanvullingen op idee\353n mogen worden genoteerd.',
            time:600
        },
        break: {
            id:'break',
            type:'break',
            title:'Korte pauze',
            description:'Tijd om de hersentjes te laten afkoelen, koffie te halen of eventjes de benen te strekken.',
            time:600
        },
        continue2: {
            id:'continue2',
            type:'continue',
            title:'Klaar om verder te gaan?',
            description:"Wissel van plek en vorm nieuwe duo's",
            theme:'theme-orange'
        },
        quote3: {
            id:'quote3',
            type:'quote',
            title:'Een vernieuwend idee ziet er altijd gek uit.',
            description:'Alfred North Whitehead',
            time:6,
            theme:'theme-purple'
        },
        wrong: {
            id:'wrong',
            type:'wrong',
            theme:'theme-green',
            title:'Foute regel',
            description:'Wanneer je een regel uit een totaal andere context toepast op je uitdaging kun je tot verrassende inzichten en spannende idee\353n komen.',
            action:{
                id:'action-wrong',
                type:'action',
                timerType:"Duo's",
                time:360,
                parent:'wrong',
                theme:'theme-fuchsia',
                title:'Na openen koel bewaren'
            },
            explain:{
                id:'explain-wrong',
                    type:'explain',
                    exitToNext:'startAction',
                    slides:[
                    {
                        name:'Uitleg',
                        title:'De uitdaging',
                        subtitle:'Hoe zorgen we dat voetgangers blijven wachten voor een rood stoplicht?'
                    },{
                        name:'Stap 1',
                        title:'Kies een valse regel',
                        subtitle:"Gebruik een regel uit een andere context. Bijvoorbeeld: 'de speler met de meeste punten wint.'"
                    },{
                        name:'Stap 2',
                        title:'Bedenk idee\353n',
                        subtitle:'Deze regel zou kunnen leiden tot een spel dat je kunt spelen tijdens het wachten.'
                    }
                ]
            }
        },
        discuss4: {
            id:'discuss4',
            type:'discuss',
            title:'Bespreek de idee\353n',
            description:'Laat iedereen aan de beurt. Eventuele aanvullingen op idee\353n mogen worden genoteerd.',
            time:600
        },
        switch: {
            id:'switch',
            type:'switch',
            theme:'theme-brown',
            time:300,
            title:'Ga op een andere plek zitten, naast iemand anders.',
            description:'Nieuwe denkpartner, nieuwe idee\353n.'
        },
        quote4:{
            id:'quote4',
            type:'quote',
            title:'Buiten de wet en de wetenschap zijn alle regels te breken.',
            description:'Tim Ferriss',
            time:6,
            theme:'theme-dark'
        },
        wish: {
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
                        title:'Wat is de gedachte hierachter?',
                        description:'Waarom lost deze wensdroom je uitdaging op?',
                        time:60
                    },
                    {
                        title:'Op welke andere manieren kun je dit bereiken?',
                        description:'Hoe kun je nog meer tot deze oplossing komen?',
                        time:300,
                        alarm:true
                    }
                ]
            },
            explain:{
                id:'explain-wish',
                type:'explain',
                exitToNext:'startAction',
                slides:[
                    {
                        name:'Uitleg',
                        title:'Voorbeeld',
                        subtitle:'Stel je bent een zonnebrillen-fabrikant. Je wilt een innovatieve bril ontwikkelen.'
                    },{
                        name:'Kans',
                        title:'Startpunt',
                        subtitle:'Een probleem dat iedereen wel herkent: je laat je zonnebril liggen op het strand of aan de rand van het zwembad.'
                    },{
                        name:'Stap 1',
                        title:'Beschrijf Wensdroom',
                        subtitle:'Zou het niet fantastisch zijn als... je zonnebril begint te gillen als je hem dreigt te vergeten?'
                    },{
                        name:'Stap 2',
                        title:'Het idee erachter',
                        subtitle:'Het idee: je wordt gewaarschuwd als je je zonnebril dreigt te vergeten.'
                    },{
                        name:'Stap 3',
                        title:'Invulling',
                        subtitle:'Hoe kunnen we dit realiseren? Door een zendertje in de bril te verwerken die gekoppeld is aan je smartphone...'
                    }
                ]
            }
        },
        discuss5: {
            id:'discuss5',
            type:'discuss',
            title:'Bespreek de idee\353n',
            description:'Laat iedereen aan de beurt. Eventuele aanvullingen op idee\353n mogen worden genoteerd.',
            time:600
        },
        trends: {
            id:'trends',
            type:'trends',
            theme:'theme-purple',
            title:'Trends',
            description:'Laat je inspireren door een trend en sluit aan op krachtige bewegingen die al in gang zijn gezet',
            action:{
                id:'action-trends',
                type:'action',
                timerType:"Duo's",
                time:300,
                alarm:true,
                parent:'trends',
                theme:'theme-fuchsia',
                title:'Hoe zouden we de trend van <span>vergrijzing</span> kunnen inzetten voor onze uitdaging?',
                img:'/app/img/trends/vergrijzing.png',
                credits:'Flickr &#64; Kamyar Adl'
            },
            explain:{
                id:'explain-trends',
                type:'explain',
                exitToNext:'startAction',
                slides:[
                    {
                        name:'Uitleg',
                        title:'Voorbeeld',
                        subtitle:'Stel je bent de eigenaar van een pizzeria en je wilt pizza\'s gaan bezorgen op een vernieuwende manier.'
                    },{
                        name:'Stap 1',
                        title:'Kies een trend',
                        subtitle:"Kies een trend. Bijvoorbeeld: 'robotica'. Kijk wat deze trend kan betekenen voor jouw organisatie"
                    },{
                        name:'Stap 2',
                        title:'Bedenk idee\353n',
                        subtitle:"'Robotica' zou bijvoorbeeld kunnen leiden tot het idee om pizza's te laten bezorgen door drones."
                    }
                ]
            }
        },
        discuss6: {
            id:'discuss6',
            type:'discuss',
            theme:'theme-ocean',
            title:'Bespreek de idee\353n',
            description:'Laat iedereen aan de beurt. Eventuele aanvullingen op idee\353n mogen worden genoteerd.',
            time:600
        },
        worse: {
            id:'worse',
            type:'worse',
            theme:'theme-eggplant',
            title:'Maak het erger',
            description:'Een situatie is altijd te verergeren. Door de uitdaging nog slechter voor te stellen zie je dingen die je anders minder snel zou zien.',
            action:{
                id:'action-worse',
                    type:'action',
                    timerType:"Duo's",
                    parent:'wish',
                    theme:'theme-brown-light',
                    title:$scope.program.focus,
                    slides:[
                    {
                        title:'Op welke manier kunnen we de situatie verergeren?',
                        description:'Schrijf \xE9\xE9n idee op.',
                        time:120
                    },
                    {
                        title:'Wat zijn voordelen van deze verergering?',
                        description:'Schrijf \xE9\xE9n idee op.',
                        time:120
                    },
                    {
                        title:'Op welke andere manieren kun je deze voordelen bereiken?',
                        description:'Noteer zoveel mogelijk idee\353n.',
                        time:120,
                        alarm:true
                    }
                ]
            },
            explain:{
                id:'explain-wish',
                    type:'explain',
                    exitToNext:'startAction',
                    slides:[
                    {
                        name:'Uitleg',
                        title:'Voorbeeld',
                        subtitle:'Stel je bent een boer en je hebt last van een insectenplaag die je oogst opeet.'
                    },{
                        name:'Stap 1',
                        title:'Maak het erger',
                        subtitle:'Je zou de situatie kunnen verergeren door zelf nog meer insecten te verspreiden over het gebied.'
                    },{
                        name:'Stap 2',
                        title:'De voordelen',
                        subtitle:'Een voordeel hiervan zou kunnen zijn dat de insecten sneller alles opeten, en hierna aan elkaar gaan peuzelen...'
                    },{
                        name:'Stap 3',
                        title:'Andere Manier',
                        subtitle:'Dit kun je ook bereiken door een natuurlijke vijand te plaatsen in het gebied die de plaag weer opeet.'
                    }
                ]
            }
        },
        discuss7: {
            id:'discuss7',
            type:'discuss',
            theme:'theme-ocean',
            title:'Bespreek de idee\353n',
            description:'Laat iedereen aan de beurt. Eventuele aanvullingen op idee\353n mogen worden genoteerd.',
            time:600
        },
        end: {
            id:'end',
            type:'end',
            title:'Genoeg idee\353n <br/>nu aan de slag',
            description:'Beoordeel de idee\353n &<br/> bespreek de opvolging'
        }
    };

    $scope.steps1 = [];
    $scope.steps1.push(steps.start);
    $scope.steps1.push(steps.intro);
    $scope.steps1.push(steps.rules);
    $scope.steps1.push(steps.braindump);
    $scope.steps1.push(steps.discuss);
    $scope.steps1.push(steps.random);
    $scope.steps1.push(steps.discuss2);
    $scope.steps1.push(steps.wish);
    $scope.steps1.push(steps.discuss3);
    $scope.steps1.push(steps.end);

    $scope.steps2 = [];
    $scope.steps2.push(steps.start);
    $scope.steps2.push(steps.intro);
    $scope.steps2.push(steps.rules);
    $scope.steps2.push(steps.braindump);
    $scope.steps2.push(steps.discuss);
    $scope.steps2.push(steps.whatif);
    $scope.steps2.push(steps.continue);
    $scope.steps2.push(steps.quote);
    $scope.steps2.push(steps.random);
    $scope.steps2.push(steps.discuss2);
    $scope.steps2.push(steps.quote2);
    $scope.steps2.push(steps.scamper);
    $scope.steps2.push(steps.discuss3);
    $scope.steps2.push(steps.break);
    $scope.steps2.push(steps.continue2);
    $scope.steps2.push(steps.quote3);
    $scope.steps2.push(steps.wrong);
    $scope.steps2.push(steps.discuss4);
    $scope.steps2.push(steps.switch);
    $scope.steps2.push(steps.quote4);
    $scope.steps2.push(steps.wish);
    $scope.steps2.push(steps.discuss5);
    $scope.steps2.push(steps.trends);
    $scope.steps2.push(steps.discuss6);
    $scope.steps2.push(steps.worse);
    $scope.steps2.push(steps.discuss7);
    $scope.steps2.push(steps.end);

    if($scope.program.duration == '1 uur') {
        $scope.steps = $scope.steps1;
    } else {
        $scope.steps = $scope.steps2;
    }


    //set percentage width for process bar
    $scope.calcProgress = function (){
        var length = $scope.steps.length;
        var stepIndex = _.findIndex($scope.steps, 'id', $routeParams.page) + 1;
        var percentage = (stepIndex / length) * 100;
//        console.log(length, stepIndex, percentage);
        var prevPercentage = $rootScope.savedPercentage || 0;
        $scope.percentage = Math.ceil(prevPercentage) + '%';
        $timeout(function(){
            $scope.percentage = Math.ceil(percentage) + '%';
        },50);
        $rootScope.savedPercentage = percentage;
    };
    $scope.calcProgress();


    //OWL FUNCTIONS

    function owlNav() {
        $('.owl-carousel').each(function(){
            var carousel = $(this);
            var carouselPrev = carousel.find('.owl-prev');
            var carouselNext = carousel.find('.owl-next');
            carousel.find('.owl-item').each(function(){
                var item = $(this);
                if (item.is(':first-child') && item.hasClass('active')) {
                    carouselPrev.addClass('disabled');
                    carouselNext.removeClass('disabled');
                } else if (item.is(':last-child') && item.hasClass('active')) {
                    carouselPrev.removeClass('disabled');
                    carouselNext.addClass('disabled');
                } else if(!item.is(':first-child') && !item.is(':last-child') && item.hasClass('active')){
                    carouselPrev.removeClass('disabled');
                    carouselNext.removeClass('disabled');
                }
            })
        })
    }

    //initialize action slides
    $scope.initSlides = function(){
        var owl = $('#action-slides-carousel');
        owl.owlCarousel({
            responsive:{
                0:{
                    items:1
                }
            },
            dots:true,
            nav:true,
            autoHeight:false,
            navText:['','']
        });

        owlNav();
        $scope.activeIndex = 0;

        owl.on('changed.owl.carousel', function(event) {
            $scope.activeIndex = event.item.index;
            $timeout(function() {
                $scope.$apply();
            },0);
            $timeout(function() {
                owlNav();
            });
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
            navText:['','']
        });
        owlNav();
        owl.on('changed.owl.carousel', function(event) {
            $timeout(function() {
                owlNav();
            });
        })
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
                    if(!$rootScope.user.soundOff) {
                        $('#alarm-audio').get(0).play();
                    }
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
                    if(!$rootScope.user.soundOff) {
                        $('#alarm-audio').get(0).play();
                    }
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
//            console.log('off');
            $rootScope.user.soundOff = true;
            $('#alarm-audio').get(0).pause();
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

    //fullscreen
    $scope.fullScreen = function() {
        if (!document.fullscreenElement &&    // alternative standard method
            !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
            $scope.fullScreenActive = true;
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
            $scope.fullScreenActive = false;
        }
    }

    //get current time and update every 30 seconds
    $scope.date = new Date();
    $interval(function () {
        $scope.date = new Date();
    }, 30000);

    $scope.closeProgram = function (event, option) {
        event.preventDefault();
        if(option == 'end') {
            $location.path('/dashboard');
        } else {
            var modalInstance = $uibModal.open({
                templateUrl: '/app/js/modals/close-program-modal/close-program-modal.html',
                controller: 'closeProgramModelCtrl'
            });

            modalInstance.result.then(function (selectedItem) {
    //            $scope.selected = selectedItem;
            }, function () {
//                console.log('Modal dismissed at: ' + new Date());
            });
        }
    }
});