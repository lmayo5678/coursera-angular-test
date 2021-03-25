(function () {
    'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.message = ""
        $scope.lunch = ""
       $scope.color = "black"

        $scope.checkLunch = function() {
            var count = countLunch($scope.lunch)
            if (count > 3){
                $scope.message = "Too much!";
            }else if (count > 0 ){
                $scope.message = "Enjoy!";
            }else
                $scope.message = "Please enter data first";
            $scope.num = count
        } 

        function countLunch (lunchString){
            var items = lunchString.split(",");
            var count = 0;
            for(var i = 0; i < items.length; i+= 1){
                if( items[i].trim().length > 0)
                    count += 1;
            }
            return count
        };
    }
})();