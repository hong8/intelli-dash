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
        page.$save(function(page) {
            $location.path('projects/' + $routeParams.projectId + '/pages/' + page._id);
        });
        
        this.name = '';
        this.view_name = '';
        this.description = '';
        this.upper_page = null;
    };

    $scope.remove = function(page) {
        if (page) {
            page.$remove();

            for (var i in $scope.pages) {
                if ($scope.pages[i] === page) {
                    $scope.pages.splice(i, 1);
                }
            }
        }
        else {
            $scope.page.$remove();
            $location.path('pages');
        }
    };

    $scope.update = function() {
        var page = $scope.page;

        if (!page.updated) {
            page.updated = [];
        }
        page.updated.push(new Date().getTime());
        
        page.$update(function() {
            $location.path('projects/' + $routeParams.projectId + '/pages/' + page._id);
        });
    };

    $scope.find = function() {
        Pages.query(function(pages) {
            $scope.pages = pages;
        });
        $scope.$routeParams = $routeParams;
    };

    $scope.findOne = function() {
        $scope.init();
        
        Pages.get({
            pageId: $routeParams.pageId
        }, function(page) {
            $scope.page = page;
        });
    };
}]);