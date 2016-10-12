(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('RestaurantController', RestaurantController)
        .service('MenuSearchService', MenuSearchService)
        .constant('path', 'https://davids-restaurant.herokuapp.com/menu_items.json')
        .directive('foundItems', FoundItemsDirective);

    function FoundItemsDirective() {
        return {
            templateUrl: 'foundItem.html',
            scope: {
                items: '<',
                myTitle: '@title',
                onRemove: '&',
                key: '<'
            },
            controller: FoundItemsDirectiveController,
            controllerAs: 'found',
            bindToController: true
        }
    }

    function FoundItemsDirectiveController() {

    }

    RestaurantController.$inject = ['MenuSearchService'];
    function RestaurantController(MenuSearchService) {
        var menu = this;
        var title = 'Search results ';

        menu.searchParams = '';
        menu.foundItems = [];
        menu.warning = 'Nothing found';
        menu.getMatchedItems = function () {
            menu.processing = true;
            menu.foundItems = [];

            MenuSearchService.getAllMenu()
                .then(function (response) {
                    var itemsArr = response.data.menu_items;
                    for (var i = 0; i < itemsArr.length; i++) {
                        var itemObj = itemsArr[i];
                        var descr = itemObj.description;
                        var isMatchSearchTerm = descr.indexOf(menu.searchParams) > -1;

                        isMatchSearchTerm && menu.foundItems.push(itemsArr[i]);
                    }
                    menu.processing = false;
                    menu.myTitle = title + "( " + menu.foundItems.length + " item(s) found):";
                }).catch(function () {
                menu.foundItems = [];
            })
        };

        menu.removeItem = function (index) {
            menu.foundItems.splice(index, 1);
            menu.myTitle = title + "( " + menu.foundItems.length + " item(s) found):";
        }
    }

    MenuSearchService.$inject = ['$http', 'path'];
    function MenuSearchService($http, path) {
        var service = this;

        service.getAllMenu = function () {
            return $http({
                method: 'GET',
                url: path
            });
        }
    }
})();