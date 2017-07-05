const sum = require('../sum.js');
const {expect,assert} = require('chai');

// Reference http://chaijs.com/ for questions

describe ('Sum', function() {

    it ('Should be a function', function() {
      expect(sum).to.be.a('function','sum is not a function');
      assert.isFunction(sum, 'sum is not a function');
    });

    it('Should return 0 if no arguments are passed in.', function() {
      expect(sum()).to.equal(0);
      assert.equal(sum(),0);
    });

    it ('Should only be passed integers', function() {
      expect(sum().isNumber);
      assert.isNumber(sum());
    });

    it ('Should not be passed negative numbers', function() {
      expect(sum().isAtLeast(sum(), 0, 'must be positive numbers'));
    });

});
