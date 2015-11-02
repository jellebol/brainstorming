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
                }]
        };
    }]);