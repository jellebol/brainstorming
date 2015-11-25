'use strict';

angular.module('brightstormApp').
    directive('footerWidget', [function () {

        return {
            restrict: 'EA',
            templateUrl: 'app/js/directives/footer-widget/footer-widget.html',
            scope: {
                user: '='
            },
            controller: ['$scope', '$rootScope',
                function ($scope, $rootScope) {
                    $scope.date = new Date();
                }]
        };
    }]);