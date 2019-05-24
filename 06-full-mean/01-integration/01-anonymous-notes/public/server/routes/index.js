const router = require('express').Router();
const noteRouter = require('./note.route');

module.exports = router.use('/notes', noteRouter);
