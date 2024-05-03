const request = require('request');
const assert = require('assert');

describe('GET /', () => {
	const HOST = 'http://localhost';
	const PORT = 7865;

    it('responds with status 200 and correct message', (done) => {
        request.get(`${HOST}:${PORT}`, (err, res, body) => {
            assert.strictEqual(res.statusCode, 200);
			assert.strictEqual(body, 'Welcome to the payment system');
            done();
        });
    });
});

describe('GET /cart/:id', () => {
	const HOST = 'http://localhost';
	const PORT = 7865;


	it('responds with status 200 when :id is a number', (done) => {
        request.get(`${HOST}:${PORT}/cart/257`, (err, res, body) => {
            assert.strictEqual(res.statusCode, 200);
			assert.strictEqual(body, 'Payment methods for cart 257');
            done();
        });
    });

	it('responds with status 404 when :id is not a number', (done) => {
        request.get(`${HOST}:${PORT}/cart/alx`, (err, res) => {
            assert.strictEqual(res.statusCode, 404);
            done();
        });
    });
});
