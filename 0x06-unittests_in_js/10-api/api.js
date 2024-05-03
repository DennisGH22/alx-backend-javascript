const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 7865;

app.use(bodyParser.json());

const validateIdParam = (req, res, next) => {
    const id = req.params.id;
    if (!/^\d+$/.test(id)) {
        return res.status(404).send();
    }
    next();
};

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

app.get('/cart/:id', validateIdParam, (req, res) => {
    const cartId = req.params.id;
    res.send(`Payment methods for cart ${cartId}`);
});

app.get('/available_payments', (req, res) => {
    res.json({
        payment_methods: {
            credit_cards: true,
            paypal: false
        }
    });
});

app.post('/login', (req, res) => {
    const { userName } = req.body;
    res.send(`Welcome ${userName}`);
});

app.listen(PORT, () => {
    console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
