(function () {
    angular.module('Data')
        .controller('DataController', dataController);

    dataController.$inject = ['$stateParams', 'MenuDataService'];
    function dataController($stateParams, MenuDataService) {
        var categoryParam = $stateParams.categoryParam;
        var dataCtrl = this;

        dataCtrl.items = [];

        MenuDataService.getItemsForCategory(categoryParam)
            .then(function (res) {
                dataCtrl.items = res.data.menu_items;
            });
    }
})();