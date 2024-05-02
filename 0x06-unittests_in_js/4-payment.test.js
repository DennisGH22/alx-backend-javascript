const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');
const { expect } = require('chai');
const sinon = require('sinon');

describe('sendPaymentRequestToApi', () => {
  it('is logging the correct message "The total is: 10"', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleLogSpy = sinon.spy(console);

    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberStub.calledWithExactly('SUM', 100, 20));
    expect(calculateNumberStub.callCount).to.be.equal(1);
    expect(consoleLogSpy.log.calledWithExactly('The total is: 10'));
    expect(consoleLogSpy.log.callCount).to.be.equal(1);

    calculateNumberStub.restore();
    consoleLogSpy.log.restore();
  });
});
