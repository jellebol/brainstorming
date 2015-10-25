'use strict';

angular.module('brightstormApp').
    directive('headerWidget', [function () {

        return {
            restrict: 'EA',
            templateUrl: 'app/js/directives/header-widget/header-widget.html',
            scope: {
                user: '='
            },
            controller: ['$scope', '$rootScope',
                function ($scope, $rootScope) {
                }]
        };
    }]);