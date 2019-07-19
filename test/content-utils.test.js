import chai from 'chai';
import sinon from 'sinon';
import utils from '../app/src/content-utils.js'
import dateUtils from '../app/src/date-utils.js'

describe('getGreeting', function() {
  it('a name provided returns "hello <name>"', function() {
    let response = utils.getGreeting('elio')
    chai.assert.equal(response, 'hello elio');
  });

  it('an empty string provided returns "hello anonymous"', function() {
    let response = utils.getGreeting('');
    chai.expect(response).to.equal('hello anonymous')
  });

  it('a null value provided returns "hello anonymous"', function() {
    const should = chai.should(); //should interface extends Object.prototype
    let response = utils.getGreeting(null);
    response.should.equal('hello anonymous');
  });
});

describe ('getTime', function() {
  it('is called once', function() {
    const spy = sinon.spy(utils, 'getTime');

    utils.getTime();
    chai.assert.equal(spy.calledOnce, true); //or => sinon.assert.calledOnce(spy)
    spy.restore();
  });

  it('stub getDate function', function() {
    const customDate = new Date(1563534474364); // 2019-07-19 13:07
    let stub = sinon.stub(dateUtils, 'getDate').returns(customDate);
    const response = utils.getTime();

    chai.assert.equal(response, '13:7');
    stub.restore();
  });

  it('useFakeTimers', function() {
    const time = 1563534474364; // 2019-07-19 13:07
    const clock = sinon.useFakeTimers(time);
    const response = utils.getTime();

    chai.assert.equal(response, '13:7');
    clock.restore();
  });

  it('mock getDate function', function() {
    const customDate = new Date(1563534474364); // 2019-07-19 13:07
    const mock = sinon.mock(dateUtils);

    // it's an asertion by itself what expects the function to call
    // twice and sets its response
    mock.expects('getDate').twice().returns(customDate);

    // call manually the function twice
    utils.getTime();
    utils.getTime();

    // check that the assertion is fulfilled 
    mock.restore();
    mock.verify();
  });
})