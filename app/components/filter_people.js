'use strict';

angular.module( 'com.teachscape.coding' ).filter( 'people', function(){
	return function( input ){
		if( typeof input === "undefined" ){ return ""; } //nothing to format
		
		if( input === 1 ){
			return "1 person";
		} else {
			return "" + input + " people";
		}
	};
} );