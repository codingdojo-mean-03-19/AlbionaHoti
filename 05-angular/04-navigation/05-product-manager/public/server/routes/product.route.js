const router = require('express').Router();
const { productController } = require('../controllers');

module.exports = router
  .get('/', productController.index)
  .post('/', productController.create)
  .get('/:product_id', productController.show)
  .put('/:product_id', productController.update)
  .delete('/:product_id', productController.destroy);
