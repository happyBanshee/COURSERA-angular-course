(function () {
    'use strict';

    angular.module('menuApp')
        .component('categories', {
            template:
            '<ul>' +
            '<li ng-repeat="item in $ctrl.items">' +
            '<span>' +
            '<strong>Name:</strong>' +
            '<a class="clickMe" ' +
                'ui-sref="items({categoryParam:item.short_name})">{{item.name}}</a> ' +
            '</li>' +
            '</ul>',
            bindings: {
                items: '<'
            }
        });
})();




// (function(){
//     angular.module('App')
//         .directive('categories', categoriesDirective);
//
// })();
//
// function categoriesDirective() {
//     return {
//         templateUrl: 'menuapp.template.html',
//         scope: {
//             items: '<',
//            // myTitle: '@title',
//             //onRemove: '&',
//             key: '<'
//         }
//         // controller: FoundItemsDirectiveController,
//         // controllerAs: 'found',
//         // bindToController: true
//     }
// }