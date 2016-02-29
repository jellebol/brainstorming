brightstormApp.controller('OverviewCtrl', function($scope, $rootScope, $routeParams, $location, $uibModal) {
    $scope.program = _.find($rootScope.user.programs, 'id', Number($routeParams.id));

    var timeString = new Date();
    timeString.setHours(0,0,0,0);
    $scope.time = timeString.getTime();

    $scope.overview = [
        {
            type:'basic',
            title:'Introductie',
            description:'',
            span:2
        },{
            type:'refresh',
            title:'Spelregels',
            description:'Oppeppertje',
            span:1
        },{
            type:'think',
            title:'Braindump',
            description:'Denktechniek',
            span:2
        },{
            type:'ideas',
            title:'Bespreken',
            description:'Idee\353n delen',
            span:2
        },{
            type:'refresh',
            title:'Wat als...',
            description:'Oppeppertje',
            span:1
        },{
            type:'think',
            title:'Willekeurige afbeelding',
            description:'Denktechniek',
            span:2
        },{
            type:'ideas',
            title:'Bespreken',
            description:'Idee\353n delen',
            span:2
        },{
            type:'think',
            title:'Scamper',
            description:'Denktechniek',
            span:1
        },{
            type:'ideas',
            title:'Bespreken',
            description:'Idee\353n delen',
            span:2
        },{
            type:'basic',
            title:'Pauze',
            description:'',
            span:2
        },{
            type:'think',
            title:'Foute regel',
            description:'Denktechniek',
            span:2
        },{
            type:'ideas',
            title:'Bespreken',
            description:'Idee\353n delen',
            span:2
        },{
            type:'refresh',
            title:'Wisselen',
            description:'Oppeppertje',
            span:1
        },{
            type:'think',
            title:'Wensdroom',
            description:'Denktechniek',
            span:3
        },{
            type:'ideas',
            title:'Idee\353n delen',
            description:'Idee\353n delen',
            span:2
        },{
            type:'think',
            title:'Trends',
            description:'Denktechniek',
            span:2
        },{
            type:'ideas',
            title:'Bespreken',
            description:'Idee\353n delen',
            span:2
        },{
            type:'think',
            title:'Maak het erger',
            description:'Denktechniek',
            span:3
        },{
            type:'ideas',
            title:'Bespreken',
            description:'Idee\353n delen',
            span:2
        }
    ];

    $scope.overviewRendered = [];

    $scope.renderOverview = function(){
        angular.forEach($scope.overview, function(item, index){
            item.count = index + 1;
            item.time = $scope.time = $scope.time + 5000;
            $scope.overviewRendered.push(item);
            function addItem(){
                var newItem = {
                    type:item.type
                };
                newItem.time = $scope.time = $scope.time + 5000;
                $scope.overviewRendered.push(newItem);
            }
            if(item.span == 2) {
                addItem();
            } else if (item.span == 3) {
                addItem();
                addItem();
            }
        })
    };
    $scope.renderOverview();

    $scope.renderCarousel = function(){
        $("#overview-carousel").owlCarousel({
            items:6,
            nav:true,
            dots:true,
            navText:['',''],
            slideBy: 'page'
        });
    };
    $(document).ready(function() {
    });
});