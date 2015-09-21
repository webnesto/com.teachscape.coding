'use strict';

angular.module('com.teachscape.coding')
	.factory('http_restaurants', [ '$http', function( $http ){
		var data = false; //cache

		function Restaurants( inits ){
			angular.extend( this, inits );
			return this;
		}

		angular.extend( Restaurants.prototype, {
			getRestaurantById: function( id ){
				var restaurants = this.restaurants;
				for( var i = 0, l = restaurants.length; i < l; i++ ){
					if( restaurants[ i ].id == id ){
						return restaurants[ i ];
					}
				}
			}
		} );

		return function( cb ){
			if( data ){
				return cb( data );
			} else {
				$http.get('data/restaurants.json' )
					.success( function( transport ){
						data = new Restaurants( transport );
						cb( data );
					} )
					.error( function(){
						//TODO: friendly service error message
					} )
				;
			}
		};
	}])
;