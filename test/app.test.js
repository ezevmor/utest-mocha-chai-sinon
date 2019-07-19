import chai from 'chai';
import app from '../app/src/app.js'

describe('getGreeting', function() {
  it('returns the right greeting', function() {
    
    let document = {};
    let response = getGreeting('elio')

    chai.assert.equal(response, 'hello elio');
  });
});