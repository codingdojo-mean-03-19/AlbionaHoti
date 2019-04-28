const router = require('express').Router();
const { taskController } = require('../controller');

module.exports = router
  .get('/', taskController.tasks)
  .get('/:id', taskController.show)
  .post('/', taskController.create)
  .put('/:id', taskController.update)
  .delete('/:id', taskController.delete);
