const express = require('express');
const Product = require('../../models/Product');
const router = express.Router();

router.get('/products', (req, res) => {
    Product.find()
        .then(product => {
            res.json(product);
        })
        .catch(err => {
            res.json({
                message: err.message
            });
        });
});

module.exports = router;
