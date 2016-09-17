(function () {
    'use strict';
    angular.module('LunchCheckerModule', [])
        .controller('LunchCheckerController', checkLunch);

    function checkLunch($scope) {
        $scope.itemsList = '';
        resetData();

        $scope.calculateIt = function () {
            resetData();

            var itemsArr = splitItems();
            var itemsLength;

            removeEmptyArrayElement(itemsArr);


            itemsLength = itemsArr.length;

            $scope.emptyString = !itemsLength;
            $scope.validAmount = itemsLength && itemsLength < 4;
            $scope.invalidAmount = itemsLength && !$scope.validAmount;

        };

        $scope.clearIt = function () {
            $scope.itemsList = '';
            resetData();
        };

        function splitItems() {
            return $scope.itemsList.split(',');
        }

        function removeEmptyArrayElement(itemsArr) {
            for (var i = 0; i < itemsArr.length; i++) {
                if (!itemsArr[i]) {
                    itemsArr.splice(i, 1);
                }
            }
        }

        function resetData() {
            $scope.emptyString = false;
            $scope.validAmount = false;
            $scope.invalidAmount = false;
        }
    }
})();