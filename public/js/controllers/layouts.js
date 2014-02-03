'use strict';

angular.module('mean.articles').controller('ArticlesController', ['$scope', '$routeParams', '$location', 'Global', 'Articles', function ($scope, $routeParams, $location, Global, Articles) {
    $scope.global = Global;

    $scope.setCheck = function(element)
    {
        $scope.constHeight = element.checked
    };

    $scope.addCol = function()
    {
        if ( !$scope.colList )
            $scope.colList = [];

        var cols = $scope.colList;
        cols.splice( cols.length, 0, { value : 100 } );

        $timeout(function() {
            $scope.$broadcast('newColAdded');
        }, 10);

        adjustColValues();
    }

    $scope.deleteCol = function()
    {
        var cols = $scope.colList;
        var index = cols.length - 1;
        if ( index > -1 && index < cols.length )
            cols.splice( index, 1 );

        adjustColValues();
    }

    function adjustColValues()
    {
        if ( !$scope.colList || $scope.colList.length == 0 )
            $scope.colList = [ { value : 100 } ];

        var colText = '';
        var colStyle = '';
        var constPercent = 100 / scope.colList;
        var constSpan = Math.round( 12 * constPercent / 100 );
        for ( var col in $scope.colList )
        {
            if ( $scope.constHeight )
            {
                col['value'] = Math.round( constPercent );
                colText += col['value']  + ' ';
                colStyle += constSpan + ' ';
            }
            else
            {
                colText += col['value'] + ' ';
                colStyle += Math.round( 12 * col['value'] / 100 ); + ' ';
            }
        }

        $scope.colText = colText;
        $scope.colStyle = colStyle;
    }

    adjustColValues()

}]);