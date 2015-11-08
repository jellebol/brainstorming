'use strict';

angular.module('brightstormApp').
    directive('timerWidget', [function () {

        return {
            restrict: 'EA',
            templateUrl: 'app/js/directives/timer-widget/timer-widget.html',
            scope: {
                user: '=',
                type: '=',
                duration: '=',
                slider: '='
            },
            controller: ['$scope', '$rootScope', '$timeout',
                function ($scope, $rootScope, $timeout) {
//                    console.log('timer!');
//                    $scope.$broadcast('timer-start');
                    $scope.durationFull = $scope.duration * 1000;
                    $scope.current = 1;
                    $scope.max = 1;
                    $scope.color = '#ffca4c';

                    if($scope.slider) {
//                        $rootScope.$broadcast('timer-stop');
                    }
                    $rootScope.$broadcast('timer-start');

                    $scope.finished = function(){
                        $rootScope.$broadcast('nextPage');
                    };

                    $scope.$on('pause', function(event, args) {
                        $rootScope.$broadcast('timer-stop');
                    });

                    $scope.$on('play', function(event, args) {
                        $rootScope.$broadcast('timer-resume');
                    });

                    $scope.$on('timer-tick', function (event, args) {
                        $scope.current = (args.millis / $scope.durationFull);
                        if ($scope.current < 0.98) {
                            $scope.color = 'red';
                        }
                        $timeout(function() {
                            $scope.$apply();
                        },0);
                    });


                }]
        };
    }]);