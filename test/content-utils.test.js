import chai from 'chai';
import utils from '../app/src/content-utils.js'

describe('getGreeting', function() {
  it('returns the right greeting', function() {
    
    let response = utils.getGreeting('elio')

    chai.assert.equal(response, 'hello elio');
  });
});