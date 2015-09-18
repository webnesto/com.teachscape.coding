'use strict';

describe('com.teachscape.coding.version module', function() {
  beforeEach(module('com.teachscape.coding.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
