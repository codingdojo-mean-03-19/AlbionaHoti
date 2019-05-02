const router = require('express').Router();
const cakeRoute = require('./cake.route');
const commentRoute = require('./comment.route');

module.exports = router.use('/cakes', cakeRoute);
module.exports = router.use('/comments', commentRoute);
// take the content '/tasks' -> affect all other routes
