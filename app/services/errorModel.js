'use strict';

angular.module('com.teachscape.coding').service("errorModel", function(){
	this._value = "";

	this.set = function( info ){
		this._value = info;
	}
	this.get = function(){
		return this._value;
	}
})
