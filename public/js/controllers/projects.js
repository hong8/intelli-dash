'use strict';

angular.module('intelli-dash.projects').controller('ProjectController', ['$scope', '$routeParams', '$location', 'Global', 'Projects', function($scope, $routeParams, $location, Global, Projects) {
    $scope.global = Global;

    $scope.init = function() {
        alert('init')
        this.categories = [{
            category: 'Dashboard',
            value: 1
        }, {
            category: 'Home Page',
            value: 2
        }, {
            category: 'Blog',
            value: 3
        }, {
            category: 'Board',
            value: 4
        }, {
            category: 'Chat',
            value: 5
        }];
    }

    $scope.create = function() {
        $scope.init();
        
        var project = new Projects({
            name: this.name,
            description: this.description,
            category: this.category,
            owner: global.user
        });
        project.$save(function(response) {
            $location.path('projects/' + response._id);
        });

        this.name = '';
        this.discription = '';
        this.category = 1;
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