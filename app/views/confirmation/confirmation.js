'use strict';

angular.module('com.teachscape.coding.confirmation', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/confirmation', {
    templateUrl: 'views/confirmation/confirmation.html',
    controller: 'ConfirmationCtrl'
  });
}])

.controller('ConfirmationCtrl', [ 
	'$scope', 
	'$routeParams', 
	'$location',
	'reservationModel',
	function( 
		$scope, 
		$routeParams, 
		$location,
		reservationModel
	) {
		console.log( "reservationModel.conf_number ", reservationModel.conf_number)
		if( !reservationModel.conf_number ){
			$location.url( "restaurants" );
		}
		$scope.reservationModel = reservationModel;
		console.log( parseInt( reservationModel.number, 10 ), typeof reservationModel.number );
	}
]);