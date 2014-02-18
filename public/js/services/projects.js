'use strict';

//Projects service used for articles REST endpoint
angular.module('intelli-dash.projects').factory('Projects', ['$resource', function($resource) {
    return $resource('projects/:projectId', {
        projectId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);