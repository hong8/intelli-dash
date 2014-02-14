'use strict';

angular.module('intelli-dash.projects').controller('ProjectController', ['$scope', '$routeParams', '$location', 'Global', 'Projects', function($scope, $routeParams, $location, Global, Projects) {
    $scope.global = Global;

    $scope.init = function() {
        this.categories = [{
            name: 'Dashboard',
            value: 1
        }, {
            name: 'Home Page',
            value: 2
        }, {
            name: 'Blog',
            value: 3
        }, {
            name: 'Board',
            value: 4
        }, {
            name: 'Chat',
            value: 5
        }];
        this.category = this.categories[0];
    }

    $scope.create = function() {
        var project = new Projects({
            name: this.name,
            description: this.description,
            category: this.category['value'],
            owner: this.global.user
        });
        project.$save(function(response) {
            $location.path('projects/' + response.project._id);
        });
        
        this.name = '';
        this.discription = '';
        this.category = this.categories[0];
    };

    $scope.remove = function(project) {
        if (project) {
            project.$remove();

            for (var i in $scope.projects) {
                if ($scope.projects[i] === project) {
                    $scope.projects.splice(i, 1);
                }
            }
        }
        else {
            $scope.project.$remove();
            $location.path('projects');
        }
    };

    $scope.update = function() {
        var project = $scope.project;
        if (!project.updated) {
            project.updated = [];
        }
        project.updated.push(new Date().getTime());

        project.$update(function() {
            $location.path('projects/' + project._id);
        });
    };

    $scope.find = function() {
        Projects.query(function(projects) {
            $scope.projects = projects;
        });
    };

    $scope.findOne = function() {
        $scope.init();
        
        Projects.get({
            projectId: $routeParams.projectId
        }, function(project) {
            $scope.project = project;
        });
    };
}]);