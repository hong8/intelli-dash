'use strict';

//Pages service used for articles REST endpoint
angular.module('intelli-dash.pages').factory('Pages', ['$resource', function($resource) {
    return $resource('pages/:pageId', {
        pageId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);