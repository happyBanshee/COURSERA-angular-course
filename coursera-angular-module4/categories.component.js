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
