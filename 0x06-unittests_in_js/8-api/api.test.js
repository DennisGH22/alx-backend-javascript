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
