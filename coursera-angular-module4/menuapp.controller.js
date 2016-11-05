(function () {
    'use strict';

    angular.module('menuApp')
        .controller('MenuAppController', MenuAppController);

    MenuAppController.$inject = ['MenuDataService'];
    function MenuAppController(MenuDataService) {
        var mainList = this;

        mainList.$onInit = function () {
            MenuDataService.getAllCategories()
                .then(function (result) {
                    mainList.items = result.data;
                });
        };
    }
})();