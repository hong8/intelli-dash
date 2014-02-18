'use strict';

//Pages service used for articles REST endpoint
angular.module('intelli-dash.pages').factory('Pages', ['$resource', '$routeParams', function($resource, $routeParams) {
    return $resource('projects/:projectId/pages/:pageId', {
        projectId: $routeParams.projectId,
        pageId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);