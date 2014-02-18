'use strict';

angular.module('intelli-dash.projects').controller('PageController', ['$scope', '$routeParams', '$location', 'Global', 'Projects', function($scope, $routeParams, $location, Global, Projects) {
    $scope.global = Global;

    $scope.init = function() {
        this.pages = [{
            name: 'Page1',
            value: 0
        }, {
            name: 'Page2',
            value: 1
        }, {
            name: 'Page3',
            value: 2
        }, {
            name: 'Page4',
            value: 3
        }, {
            name: 'Page5',
            value: 4
        }];
        this.page = this.pages[0];
    }

    $scope.create = function() {
        var project = new Projects({
            name: this.name,
            description: this.description,
            page: this.page['value']
        });
        project.$save(function(project) {
            $location.path('projects/' + project._id);
        });
        
        this.name = '';
        this.description = '';
        this.page = this.pages[0];
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
        project.page = $scope.page['value'];
        
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
            $scope.page = $scope.pages[project.page];
        });
    };
}]);