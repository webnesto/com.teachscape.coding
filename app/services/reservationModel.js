'use strict';

angular.module('com.teachscape.coding').service("reservationModel", function(){
	// this._value = {};
	this.date = "";
	this.time = "";
	this.number = "";
	this.name = "";

	this.set = function( info ){
		angular.extend( this, info );
	}
	
})
