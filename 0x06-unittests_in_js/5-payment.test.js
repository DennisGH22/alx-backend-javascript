const sendPaymentRequestToApi = require('./5-payment');
const { expect } = require('chai');
const sinon = require('sinon');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console);
  });

  afterEach(() => {
    consoleLogSpy.log.resetHistory();
  });

  it('is logging the correct message "The total is: 120"', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleLogSpy.log.calledWithExactly('The total is: 120'));
    expect(consoleLogSpy.log.calledOnce);
  });

  it('is logging the correct message "The total is: 20"', () => {
    const consoleLogSpy = sinon.spy(console);

    sendPaymentRequestToApi(10, 10);
    expect(consoleLogSpy.log.calledWithExactly('The total is: 20'));
    expect(consoleLogSpy.log.calledOnce);
  });
});
