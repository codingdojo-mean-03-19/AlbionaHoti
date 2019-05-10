const router = require('express').Router();
const { noteController } = require('../controllers');

module.exports = router
  .get('/', noteController.index)
  .post('/', noteController.create);
