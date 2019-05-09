const router = require('express').Router();
const authorRouter = require('./author.route');

module.exports = router.use('/authors', authorRouter);
module.exports = router.use('/quotes', authorRouter);
