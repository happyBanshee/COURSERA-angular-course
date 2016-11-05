(function () {
    angular.module('Data')
        .controller('DataController', dataController);

    dataController.$inject = ['itemsList'];
    function dataController(itemsList) {
        var dataCtrl = this;

        dataCtrl.items = itemsList;
        console.log(dataCtrl.items);
    }
})();