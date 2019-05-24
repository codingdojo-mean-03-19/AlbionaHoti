const playerRouter = require('./player.route');
const statusRouter = require('./status.route');
const catchAllRoute = require('./catch-all.route');
const router = require('express').Router();
const api = require('express').Router();

router.use('/players', playerRouter);
router.use('/status', statusRouter);

module.exports = api.use('/api', router).use(catchAllRoute);
