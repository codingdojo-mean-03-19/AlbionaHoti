const router = require('express').Router();
const { cakeController } = require('../controller');

module.exports = router
  .get('/', cakeController.cakes)
  .get('/:id', cakeController.show)
  .post('/', cakeController.create);
