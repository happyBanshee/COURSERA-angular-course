(function () {
    'use strict';

    angular.module('menuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');

        // *** Set up UI states ***
        $stateProvider

        // Home page
            .state('home', {
                url: '/',
                template: '<div>Welcome to our Restaurant!</div>' +
                '<a ui-sref="categories">View Categories</a>'
            })

            .state('categories', {
                url: '/categories',
                templateUrl: 'menuapp.template.html'
            })

            .state('items', {
                url: '/items/{categoryParam}',
                templateUrl: 'data.template.html',
                controller: 'DataController as dataCtrl',
                resolve: {
                    itemsList: ['$stateParams', 'MenuDataService',
                        function ($stateParams, MenuDataService) {
                            return MenuDataService.getItemsForCategory($stateParams.categoryParam)
                                .then(function(res){
                                return res.data.menu_items;
                            })
                        }]
                }
            });
    }

})();