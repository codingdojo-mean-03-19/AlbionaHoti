const router = require('express').Router();
const { authorController, quoteController } = require('../controllers');

module.exports = router
  .get('/', authorController.index)
  .post('/', authorController.create)
  .get('/:author_id', authorController.show)
  .put('/:author_id', authorController.update)
  .delete('/:author_id', authorController.destroy)

  .post('/:author_id', quoteController.create)
  .get('/:author_id', quoteController.showQuotes)
  .delete('/:quote_id/:author_id', quoteController.destroy);
