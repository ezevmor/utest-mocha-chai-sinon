import chai from 'chai';
import utils from '../app/src/content-utils.js'

describe('getGreeting', function() {
  it('a name provided returns "hello <name>"', function() {
    let response = utils.getGreeting('elio')
    chai.assert.equal(response, 'hello elio');
  });

  it('an empty string provided returns "hello anonymous"', function() {
    let response = utils.getGreeting('');
    chai.expect(response).to.equal('hello anonymous')
  })

  it('a null value provided returns "hello anonymous"', function() {
    const should = chai.should(); //should interface extends Object.prototype
    let response = utils.getGreeting(null);
    response.should.equal('hello anonymous');
  })
});