const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const { expect } = require('chai');
const sinon = require('sinon');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi is the same as Utils.calculateNumber', () => {
    const calculateNumberSpy = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberSpy.calculateNumber.calledWithExactly('SUM', 100, 20));
    calculateNumberSpy.calculateNumber.restore();
  });
});
