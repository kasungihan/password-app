	var app = angular.module('mainApp', ['ngRoute']);
	
	app.config(['$routeProvider', function ($routeProvider) {
	        $routeProvider.when('/', {
	                templateUrl: './template/host-table.html'
	            });
	        $routeProvider.when('/add-host', {
	                templateUrl: './template/add-host.html'
	            });
	        $routeProvider.when('/add-domain', {
	                templateUrl: './template/add-domain.html'
	            });
	        $routeProvider.when('/domain-table', {
	                templateUrl: './template/domain-table.html'
	            });
	        $routeProvider.when('/view-host', {
	                templateUrl: './template/view-host.html'
	            });
	        $routeProvider.when('/view-domain', {
	                templateUrl: './template/view-domain.html'
	            });
	        $routeProvider.otherwise({redirectTo: '/'});
	    }
	]);
