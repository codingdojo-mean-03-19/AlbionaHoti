const router = require('express').Router();
const { authorController } = require('../controllers');

module.exports = router
  .get('/', authorController.index)
  .post('/', authorController.create)
  .get('/:author_id', authorController.show)
  .put('/:author_id', authorController.update)
  .delete('/:author_id', authorController.destroy);
