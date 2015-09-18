'use strict';

angular.module('com.teachscape.coding.reservation', ['ngRoute'])
.factory('http_restaurant', [ '$http', function( $http ){
	var reservation = false; //cache

	return function( cb ){
		if( reservation ){
			return cb( reservation );
		} else {
			$http.get('data/reservation.json' )
				.success( function( data ){
					reservation = data;
					cb( reservation )
				} )
				.error( function(){
					//TODO: friendly service error message
				} )
			;
		}
	}
}])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/reservation/:resaurant', {
    templateUrl: 'reservation/reservation.html',
    controller: 'ReservationCtrl'
  });
}])

.controller('ReservationCtrl', [ '$scope', '$routeParams', 'http_restaurant', function( $scope, $routeParams, http_restaurant ) {
	console.log( $routeParams.resaurant );
	// $scope.reservation = [];
	// $scope.loading = true;

	// $scope.selectreservation = function ( rid ){
	// 	console.log("rid", rid)
	// };

	// http_restaurant( function( reservation ){
	// 	$scope.reservation = reservation;
	// 	$scope.loading = false;
	// } );
}]);