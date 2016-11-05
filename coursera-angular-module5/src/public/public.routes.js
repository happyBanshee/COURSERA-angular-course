(function() {
	'use strict';

	angular.module('public')
	.config(routeConfig);

	/**
	 * Configures the routes and views
	 */
	routeConfig.$inject = ['$stateProvider'];
	function routeConfig ($stateProvider) {
		// Routes
		$stateProvider
		.state('public', {
			absract: true,
			templateUrl: 'src/public/public.html'
		})
		.state('public.home', {
			url: '/',
			templateUrl: 'src/public/home/home.html'
		})
		.state('public.menu', {
			url: '/menu',
			templateUrl: 'src/public/menu/menu.html',
			controller: 'MenuController',
			controllerAs: 'menuCtrl',
			resolve: {
				menuCategories: ['MenuService', function (MenuService) {
					return MenuService.getCategories();
				}]
			}
		})
		.state('public.menuitems', {
			url: '/menu/{category}',
			templateUrl: 'src/public/menu-items/menu-items.html',
			controller: 'MenuItemsController',
			controllerAs: 'menuItemsCtrl',
			resolve: {
				menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
					return MenuService.getMenuItems($stateParams.category);
				}]
			}
		})
		.state('public.myInfo', {
			url: '/myInfo',
			templateUrl: 'src/public/myInfo.html',
			controller: 'MyInfoController',
			controllerAs: 'myInfoControl',
			resolve: {
				user: ['MenuService', function (MenuService) {
					var user=MenuService.getFromService()
					return user;
				}]
			}
		})
		.state('public.signUp', {
			url: '/signUp',
			templateUrl: 'src/public/signUp.html',
			controller: 'SignUpController',
			controllerAs: 'signUpCtrl',
			resolve: {
				user: ['MenuService', function (MenuService) {MenuService.resetInService();
				}]
			}
		});
	}
})();
