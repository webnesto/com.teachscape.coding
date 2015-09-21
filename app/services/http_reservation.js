angular.module('com.teachscape.coding')
	.factory('http_reservation', [ '$http', function( $http ){

		return function( cb, postdata ){
			/*
			TODO: use actual service that may look something like this
			$http.post( '/data/reservation', postdata)
				.success( function( transport ){
					cb( transport )
				} )
				.error( function(){
					//TODO: friendly service error message
				} )
			;
			*/
			/*
			For dev, just coding 50/50 chance of success
			 */
			var success = !!Math.round( (Math.random() ));

			// Either return the postdata (if it was a "success") or one of 3 random error messages
			var responsedata = success ? angular.extend( {}, postdata, {
				conf_number: Math.floor( ( Math.random() * 10000 ) + 1 )
			} ) : [
				"Requested time slot is full"
			,	"Could not contact restaurant, please try back later"
			,	"Restaurant is not open that day"
			][ Math.floor( ( Math.random() * 3 ) )];

			cb( success, responsedata );
		}
	}])
;