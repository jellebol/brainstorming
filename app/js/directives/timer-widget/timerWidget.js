'use strict';

angular.module('brightstormApp').
    directive('timerWidget', [function () {

        return {
            restrict: 'EA',
            templateUrl: 'app/js/directives/timer-widget/timer-widget.html',
            scope: {
                user: '=',
                type: '=',
                duration: '='
            },
            controller: ['$scope', '$rootScope', '$timeout',
                function ($scope, $rootScope, $timeout) {
//                    console.log('timer!');
//                    $scope.$broadcast('timer-start');
                    $scope.durationFull = $scope.duration * 1000;
                    $scope.current = 1;
                    $scope.max = 1;
                    $scope.color = '#ffca4c';

                    $scope.finished = function(){
                        console.log('done');
                    };

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