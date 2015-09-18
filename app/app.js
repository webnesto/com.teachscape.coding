'use strict';

// Declare app level module which depends on views, and components
angular.module('com.teachscape.coding', [
  'ngRoute',
  'com.teachscape.coding.restaurants',
  'com.teachscape.coding.reservation',
  // 'com.teachscape.coding.confirmation',
  // 'com.teachscape.coding.error'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/restaurants'});
}]);
