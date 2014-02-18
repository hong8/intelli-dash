'use strict';

//Setting up route
angular.module('intelli-dash').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/projects', {
            templateUrl: 'views/projects/list.html'
        }).
        when('/projects/create', {
            templateUrl: 'views/projects/create.html'
        }).
        when('/projects/:projectId', {
            templateUrl: 'views/projects/view.html'
        }).
        when('/projects/:projectId/edit', {
            templateUrl: 'views/projects/edit.html'
        }).
        when('/projects/:projectId/group', {
            templateUrl: 'views/groups/list.html'
        }).
        when('/projects/:projectId/page', {
            templateUrl: 'views/pages/list.html'
        }).
        when('/projects/:projectId/page/create', {
            templateUrl: 'views/pages/create.html'
        }).
        when('/projects/:projectId/page/:pageId', {
            templateUrl: 'views/pages/edit.html'
        }).
        when('/', {
            templateUrl: 'views/index.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

//Setting HTML5 Location Mode
angular.module('intelli-dash').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);