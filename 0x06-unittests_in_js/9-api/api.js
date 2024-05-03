const express = require('express');

const app = express();

const PORT = 7865;

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

app.listen(PORT, () => {
    console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
