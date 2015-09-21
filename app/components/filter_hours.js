'use strict';

angular.module( 'com.teachscape.coding' ).filter( 'hours', function(){
	return function( input ){
		if( typeof input === "undefined" ){ return ""; } //nothing to format
		var parts = input.split(':');
		if( !parts.length ){ return input; } //nothing to format
        var hour = parseInt( parts[0], 10 ),
        minutes = parts[1],
        out = "";

	    if (hour > 12) {
	        out = (hour - 12) + ':' + minutes + ' pm';
	    } else if (hour == 0) {
	        out = 12 + ':' + minutes + ' am';
	    } else if (hour == 12) {
	        out = 12 + ':' + minutes + ' pm';
	    } else {
	        out = hour + ':' + minutes + ' am';
	    }

	    return out;
	}
} );