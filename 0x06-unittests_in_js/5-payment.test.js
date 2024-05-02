const sendPaymentRequestToApi = require('./5-payment');
const { expect } = require('chai');
const sinon = require('sinon');

describe('sendPaymentRequestToApi', () => {
  it('is logging the correct message "The total is: 120"', () => {
    const consoleLogSpy = sinon.spy(console);

    sendPaymentRequestToApi(100, 20);
    expect(consoleLogSpy.log.calledOnceWithExactly('The total is: 120'));

    consoleLogSpy.log.restore();
  });

  it('is logging the correct message "The total is: 20"', () => {
    const consoleLogSpy = sinon.spy(console);

    sendPaymentRequestToApi(10, 10);
    expect(consoleLogSpy.log.calledOnceWithExactly('The total is: 20'));

    consoleLogSpy.log.restore();
  });
});
