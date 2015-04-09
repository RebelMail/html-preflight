'use strict';

var expect = require('chai').expect;

var Prefixer = require('./../../lib/plugins').PrefixerPlugin;

describe('PrefixerPlugin', function() {
  describe('#constructor', function() {
    it('should not return nil', function() {
      expect(new Prefixer()).to.exist;
    });
    it('should store opts', function() {
      expect(new Prefixer(true).opts).to.exist;
    });
  });
  describe('#run', function() {
    var prefixer;
    before(function() {
      prefixer = new Prefixer();
    });
    it('should return err if invalid input', function(done) {
      prefixer.run('<htm', function(err) {
        expect(err).to.exist;
        done();
      });

    });
    it('should return result if valid input', function(done) {
      prefixer.run('<html></html>', function(err, html) {
        expect(err).to.not.exist;
        expect(html).to.exist;
        done();
      });
    });
  });
});
