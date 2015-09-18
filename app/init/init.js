'use strict';

angular.module('com.teachscape.coding.init', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/init', {
    templateUrl: 'init/init.html',
    controller: 'InitCtrl'
  });
}])

.controller('InitCtrl', [function() {

}]);