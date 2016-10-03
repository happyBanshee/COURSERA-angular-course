(function () {
    'use strict';


    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyListController', ToBuyListController)
        .controller('BoughtListController', BoughtListController)
        .service('ItemsService', ItemsService);

    ToBuyListController.$inject = ['ItemsService'];
    function ToBuyListController(ItemsService) {
        var buyList = this;

        buyList.items = ItemsService.items;
        buyList.buyIt = function (index) {
            ItemsService.replaceItem(index);
        }
    }

    BoughtListController.$inject = ['ItemsService'];
    function BoughtListController(ItemsService) {
        var doneList = this;

        doneList.items = ItemsService.itemsBought;
    }

    function ItemsService() {
        var service = this;

        service.items = [
            {
                name: 'bread',
                quantity: '1'
            },
            {
                name: 'cookies',
                quantity: '2 bags'
            },
            {
                name: 'milk',
                quantity: '1 l'
            },
            {
                name: 'cheese',
                quantity: '0,3 kg'
            },
            {
                name: 'apples',
                quantity: '1 kg'
            }
        ];
        service.itemsBought = [];

        service.replaceItem = function (index) {
            try {
                var removeObj = service.items.splice(index, 1)[0];
                var tmpItem = {
                    name: removeObj.name,
                    quantity: removeObj.quantity
                };

                service.itemsBought.push(tmpItem);
            }
            catch (e) {

            }

        };


    }
})();