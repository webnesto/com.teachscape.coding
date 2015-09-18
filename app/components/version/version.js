'use strict';

angular.module('com.teachscape.coding.version', [
  'com.teachscape.coding.version.interpolate-filter',
  'com.teachscape.coding.version.version-directive'
])

.value('version', '0.1');
