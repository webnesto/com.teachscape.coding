'use strict';

angular.module('com.teachscape.coding.restaurants', ['ngRoute'])
.factory('http_restaurants', [ '$http', function( $http ){
	var restaurants = false; //cache

	return function( cb ){
		if( restaurants ){
			return cb( restaurants );
		} else {
			$http.get('data/restaurants.json' )
				.success( function( data ){
					restaurants = data;
					cb( restaurants )
				} )
				.error( function(){
					//TODO: friendly service error message
				} )
			;
		}
	}
}])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/restaurants', {
    templateUrl: 'restaurants/restaurants.html',
    controller: 'RestaurantsCtrl'
  });
}])

.controller('RestaurantsCtrl', [ '$scope', '$location', 'http_restaurants', function( $scope, $location, http_restaurants ) {
	$scope.restaurants = [];
	$scope.loading = true;

	$scope.selectRestaurant = function ( rid ){
		console.log("rid", rid)
		$location.url("reservation/" + rid )
	};

	http_restaurants( function( restaurants ){
		$scope.restaurants = restaurants;
		$scope.loading = false;
	} );
}]);