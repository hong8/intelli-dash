'use strict';

angular.module('intelli-dash.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [
        {
            'title': 'Projects',
            'link': 'projects'
        },
        {
            'title': 'Create New Project',
            'link': 'projects/create'
        }
    ];

    $scope.isCollapsed = false;
}]);