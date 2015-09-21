'use strict';

angular.module('com.teachscape.coding.error', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/error', {
    templateUrl: 'views/error/error.html',
    controller: 'ErrorCtrl'
  });
}])

.controller('ErrorCtrl', [ 
	'$scope', 
	'$routeParams', 
	'$location',
	'$window',
	'errorModel',
	function( 
		$scope, 
		$routeParams, 
		$location,
		$window,
		errorModel
	) {
		var errorMsg = errorModel.get();

		if( errorMsg === "" ){
			$location.url( "restaurants" );
		}
		else {
			$scope.error = errorMsg;
		}

		$scope.goback = function(){
			$window.history.back();
		};
	}
]);