'use strict';

angular.module( 'com.teachscape.coding' ).filter( 'date', function(){
	return function( input ){
		if( typeof input === "undefined" ){ return ""; } //nothing to format
		
		var date = new Date( input );

		return date.getMonth() + "/" + date.getDate() + "/" + date.getUTCFullYear();
	}
} );