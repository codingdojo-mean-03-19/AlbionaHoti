const { playerController } = require('../controllers');
const router = require('express').Router();

module.exports = router
  .put('/:status', playerController.updateStatusForGame)
  .put('/edit/:player_id', playerController.updateStatus);
