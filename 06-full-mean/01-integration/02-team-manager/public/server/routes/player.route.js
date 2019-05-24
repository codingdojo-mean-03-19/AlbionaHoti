const { playerController } = require('../controllers');
const router = require('express').Router();

module.exports = router
  .get('/', playerController.index)
  .post('/', playerController.create)
  .delete('/:player_id', playerController.destroy);
