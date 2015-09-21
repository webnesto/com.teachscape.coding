'use strict';

angular.module('com.teachscape.coding.restaurants', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/restaurants', {
		templateUrl: 'views/restaurants/restaurants.html',
		controller: 'RestaurantsCtrl'
	});
}])
.controller('RestaurantsCtrl', [ 
	'$scope', 
	'$location', 
	'reservationModel',
	'http_restaurants', 
	function( 
		$scope, 
		$location, 
		reservationModel,
		http_restaurants 
	) {
		$scope.restaurants = [];
		$scope.loading = true;

		$scope.selectRestaurant = function ( rid, name ){
			reservationModel.name = name;
			$location.url("reservation/" + rid );
		};

		http_restaurants( function( data ){
			$scope.restaurants = data.restaurants;
			$scope.loading = false;
		} );
	}
]);