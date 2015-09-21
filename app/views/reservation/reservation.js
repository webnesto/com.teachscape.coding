'use strict';

angular.module('com.teachscape.coding.reservation', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/reservation/:restaurant', {
    templateUrl: 'views/reservation/reservation.html',
    controller: 'ReservationCtrl'
  });
}])

.controller('ReservationCtrl', [ 
	'$scope', 
	'$routeParams', 
	'$location',
	'errorModel',
	'reservationModel',
	'http_restaurants',
	'http_reservation',
	function( 
		$scope, 
		$routeParams, 
		$location,
		errorModel,
		reservationModel,
		http_restaurants,
		http_reservation
	) {

		$scope.availablehours = [];

		$scope.reservationModel = reservationModel;

		$scope.reserve = function(){
			reservationModel.name = $scope.name;
			
			http_reservation( function( confirmation, data ){
				if( confirmation ){
					reservationModel.set( data );
					$location.url( "confirmation" );
				} else {
					errorModel.set( data );
					$location.url( "error" );
				}
			} );
		};

		http_restaurants( function( restaurants ){
			var openhour = 0;
			var closehour = 0;
			var restaurant = restaurants.getRestaurantById( $routeParams.restaurant );

			angular.extend( $scope, restaurant );
			openhour = parseInt( restaurant.hours.open.split( ":" )[ 0 ], 10 );
			closehour = parseInt( restaurant.hours.close.split( ":" )[ 0 ], 10 );

			for( var i = openhour; i < closehour; i++ ){
				$scope.availablehours.push( i );
			}
		} );
	}
]);