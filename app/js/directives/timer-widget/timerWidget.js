'use strict';

angular.module('brightstormApp').
    directive('timerWidget', [function () {

        return {
            restrict: 'EA',
            templateUrl: 'app/js/directives/timer-widget/timer-widget.html',
            scope: {
                user: '='
            },
            controller: ['$scope', '$rootScope',
                function ($scope, $rootScope) {
                    console.log('timer!');
                    $scope.amountSeconds = 300;
//                    $scope.$broadcast('timer-start');

                    $scope.finished = function(){
                        console.log('done');
                    }

                    $scope.$on('timer-tick', function (event, args) {
//                        console.log(args);
                    });
                }]
        };
    }]);