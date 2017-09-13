const chai = require('chai');
const assert = chai.assert;
const vowels = require('../vowels');
const countVowels = vowels

describe('vowels', function(){
  it('returns 0 if there are no vowels in the given string', function(){
    assert.equal(countVowels('str'), 0)
  });
  it('returns the number of vowels in a given string', function(){
    assert.equal(countVowels('hello world'), 3)
  });
  it('only takes strings as args', function(){
    assert.equal(countVowels([1,2,3,4]), 'please enter a string')
    assert.equal(countVowels(), 'please enter a string')
  })
})
