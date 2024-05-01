const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe('calculateNumber', () => {
  it('correctly adds 2 args', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('correctly adds 2 args', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('correctly adds 2 args', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('correctly adds 2 args', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
