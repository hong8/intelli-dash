'use strict';

angular.module('intelli-dash.pages').controller('PageController', ['$scope', '$routeParams', '$location', 'Global', 'Pages', function($scope, $routeParams, $location, Global, Pages) {
    $scope.global = Global;

    $scope.init = function() {

    }

    $scope.create = function() {
        var page = new Pages({
            name: this.name,
            view_name: this.view_name,
            description: this.description,
            project: $routeParams.projectId,
            upper_page: null
        });
        page.$save({
            projectId: $routeParams.projectId,
            pageId: $routeParams.pageId
        }, function(page) {
            //$location.path('projects/' + $routeParams.projectId + '/pages/' + page._id);
            $location.path('projects/' + $routeParams.projectId + '/pages');
        });

        this.name = '';
        this.view_name = '';
        this.description = '';
        this.upper_page = null;
    };

    $scope.remove = function(page) {
        if (page) {
            page.$remove({
                projectId: $routeParams.projectId,
                pageId: $routeParams.pageId
            });

            for (var i in $scope.pages) {
                if ($scope.pages[i] === page) {
                    $scope.pages.splice(i, 1);
                }
            }
        }
        else {
            $scope.page.$remove({
                projectId: $routeParams.projectId,
                pageId: $routeParams.pageId
            });
            $location.path('projects/' + $routeParams.projectId + '/pages');
        }
    };

    $scope.update = function() {
        var page = $scope.page;

        if (!page.updated) {
            page.updated = [];
        }
        page.updated.push(new Date().getTime());

        page.$update({
            projectId: $routeParams.projectId,
            pageId: $routeParams.pageId
        }, function() {
            //$location.path('projects/' + $routeParams.projectId + '/pages/' + page._id);
            $location.path('projects/' + $routeParams.projectId + '/pages');
        });
    };

    $scope.find = function() {
        Pages.query({
            projectId: $routeParams.projectId
        }, function(pages) {
            $scope.pages = pages;
        });
        $scope.$routeParams = $routeParams;
    };

    $scope.findOne = function() {
        $scope.init();

        Pages.get({
            projectId: $routeParams.projectId,
            pageId: $routeParams.pageId
        }, function(page) {
            $scope.page = page;
        });

        $scope.$routeParams = $routeParams;
    };
}]);