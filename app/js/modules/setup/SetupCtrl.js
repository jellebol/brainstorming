brightstormApp.controller('SetupCtrl', function($scope, $rootScope, $routeParams, $location, $timeout, $uibModal) {
    $scope.program = _.find($rootScope.user.programs, 'id', Number($routeParams.id));
    if($scope.program.focus) $scope.focus = $scope.program.focus;
    console.log($scope.program);
    $scope.page = $routeParams.page;

    $scope.setupSteps = [
        {
            page:1,
            choices: [
                {
                    id:'1 uur',
                    title:'Kort',
                    content:'Pressure cooker. Voor wie vernieuwende idee\353n zoekt, maar krap in de tijd zit.',
                    description:'1 uur',
                    imgDark:'setup-1a-black.png',
                    imgLight:'setup-1a-white.png'
                },{
                    id:'2 uur',
                    title:'Volledig',
                    content:'Intensieve denksessie. Voor wie het creatief nadenken snel doch serieus wil aanpakken.',
                    description:'2 uur',
                    imgDark:'setup-1b-black.png',
                    imgLight:'setup-1b-white.png'
                },{
                    id:'3 uur',
                    title:'Uitgebreid',
                    content:'Royale denksessie met alles erop en eraan. Voor wie het onderste uit de kan wil halen.',
                    description:'3 uur',
                    imgDark:'setup-1c-black.png',
                    imgLight:'setup-1c-white.png'
                }
            ]
        },{
            page:2,
            choices:[
                {
                    id:'1',
                    title:'Ik ben alleen',
                    content:'Geen zorgen, ook in je eentje kun je de meest verrassende idee\353n bedenken.',
                    description:'1',
                    imgDark:'setup-2a-black.png',
                    imgLight:'setup-2a-white.png'
                },{
                    id:'2-5',
                    title:'Klein groepje',
                    content:'Klein genoeg om snel te schakelen en groot genoeg om verrassend te blijven.',
                    description:'2 - 5',
                    imgDark:'setup-2b-black.png',
                    imgLight:'setup-2b-white.png'
                },{
                    id:'6-12',
                    title:'Flinke groep',
                    content:'Hoe meer slimme koppen je bij elkaar steekt, hoe groter de oogst aan idee\353n.',
                    description:'6 - 12',
                    imgDark:'setup-2c-black.png',
                    imgLight:'setup-2c-white.png'
                }
            ]
        },{
            page:3,
            choices:[
                {
                    id:'easy',
                    title:'Vertrouwd',
                    content:'Een veilige aanpak voor conventionele deelnemers die creatief willen nadenken.',
                    description:'Ik blijf waar ik ben',
                    imgDark:'setup-3a-black.png',
                    imgLight:'setup-3a-white.png'
                },{
                    id:'medium',
                    title:'Uitdagend',
                    content:'Uit de comfortzone, maar niet te. Daag je deelnemers uit om creatief te denken.',
                    description:'Ik neem een gokje',
                    imgDark:'setup-3b-black.png',
                    imgLight:'setup-3b-white.png'
                },{
                    id:'hard',
                    title:'Extreem',
                    content:'Haal alles uit de deelnemers en daag ze uit met echt verrassende idee\353n te komen.',
                    description:'Kom maar <br/>op!',
                    imgDark:'setup-3c-black.png',
                    imgLight:'setup-3c-white.png'
                }
            ]
        },{
            page:4,
            choices:[
                {
                    id:'Verbeteringen',
                    title:'Verbeteringen',
                    content:'Iets kan of moet beter. Verbeter bestaande producten, diensten of processen.',
                    description:'Verbeteringen',
                    imgDark:'setup-4a-black.png',
                    imgLight:'setup-4a-white.png'
                },{
                    id:'Oplossingen',
                    title:'Oplossingen',
                    content:'Je loopt tegen iets aan. Dit kan van alles zijn. Vind een oplossing voor je probleem.',
                    description:'Oplossingen',
                    imgDark:'setup-4b-black.png',
                    imgLight:'setup-4b-white.png'
                },{
                    id:'Kansen',
                    title:'Kansen',
                    content:'Iets uit niets. Ontwikkel compleet nieuwe producten en diensten.',
                    description:'Kansen',
                    imgDark:'setup-4c-black.png',
                    imgLight:'setup-4c-white.png'
                }
            ]
        }

    ]

    $scope.setupPick = function (choice) {
        $('[data-toggle="popover"]').popover('hide');
        switch (Number($scope.page)) {
            case 1:
                $scope.program.duration = choice;
                break;
            case 2:
                $scope.program.participants = choice;
                break;
            case 3:
                $scope.program.level = choice;
                break;
            case 4:
                $scope.program.subject = choice;
                break;
            case 5:
                $scope.program.focus = choice;
                break;
        }

        var nextPage = Number($routeParams.page) + 1;
        if($scope.page != 6)
            $location.path('/setup/' + ($scope.program.id) + '/' + nextPage);
    };

    $scope.stepBack = function(){
        var previousPage = Number($routeParams.page) - 1;
        if(previousPage != 0)
            $location.path('/setup/' + ($scope.program.id) + '/' + previousPage);
    };

    $scope.moreInfo = function () {
        var modalInstance = $uibModal.open({
            templateUrl: '/app/js/modals/focus-modal/focus-modal.html',
            controller: 'focusModelCtrl'
        });

        modalInstance.result.then(function (selectedItem) {
//            $scope.selected = selectedItem;
        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    };

    $scope.renderPopovers = function () {
        $timeout(function(){
            $('[data-toggle="popover"]').popover({
                trigger:'hover'
            },1000)
        })
    }
});