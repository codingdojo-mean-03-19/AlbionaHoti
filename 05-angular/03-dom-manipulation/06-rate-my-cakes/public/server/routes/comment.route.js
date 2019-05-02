const router = require('express').Router();
const { commentController } = require('../controller');

module.exports = router
  // .get('/', cakeController.cakes)
  // .get('/:id', cakeController.show)
  .post('/', commentController.create);
