const Product = require('mongoose').model('Product');
const { Http } = require('@status/codes');

module.exports = {
  // retrieving all of a resource (products: Product[])
  index(_req, res) {
    Product.find({})
      .then(products => res.json(products))
      .catch(error => res.status(Http.InsufficientStorage).json(error));
  },

  // create a resource
  create(req, res) {
    console.log('req.body', req.body);
    console.log('req.body', req.params);
    Product.create(req.body)
      .then(product => res.json(product))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );

        res.status(Http.UnprocessableEntity).json(errors);
      });
  },

  // retrieve a single resource
  show(req, res) {
    console.log('req params: ', req.params);
    const { product_id: productId } = req.params;
    console.log('productId: ', productId);
    Product.findById(productId)
      .then(product => res.json(product))
      .catch(error => res.status(Http.UnavailableForLegalReasons).json(error));
  },

  // update a single resource
  update(req, res) {
    console.log('req params: ', req.params);
    console.log('req body: ', req.body);
    const { product_id: productId } = req.params;
    console.log('productId: ', productId);
    Product.findByIdAndUpdate(productId, req.body, { new: true })
      .then(product => res.json(product))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );

        res.status(Http.UnprocessableEntity).json(errors);
      });
  },

  // destroy/delete/remove a single resource
  destroy(req, res) {
    const { product_id: productId } = req.params;
    Product.findByIdAndRemove(productId)
      .then(product => res.json(product))
      .catch(error => res.status(Http.ResetContent).json(error));
  },
};
