const router = require('express').Router();
const productRouter = require('./product.route');

module.exports = router.use('/products', productRouter);
