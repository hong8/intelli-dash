'use strict';

angular.module('intelli-dash.pages').controller('PageController', ['$scope', '$routeParams', '$location', 'Global', 'Pages', function($scope, $routeParams, $location, Global, Pages) {
    $scope.global = Global;

    $scope.init = function() {

    }

    $scope.create = function() {
        var page = new Pages({
            name: this.name,
            description: this.description,
            page: this.page['value']
        });
        page.$save(function(page) {
            $location.path('pages/' + page._id);
        });
        
        this.name = '';
        this.description = '';
        this.page = this.pages[0];
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
            $location.path('pages/' + page._id);
        });
    };

    $scope.find = function() {
        Pages.query(function(pages) {
            $scope.pages = pages;
        });
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