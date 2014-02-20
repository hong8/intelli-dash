'use strict';

//Pages service used for articles REST endpoint
angular.module('intelli-dash.pages').factory('Pages', ['$resource', function($resource) {
    return $resource('projects/:projectId/pages/:pageId', {
        projectId: '@projectId',
        pageId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);