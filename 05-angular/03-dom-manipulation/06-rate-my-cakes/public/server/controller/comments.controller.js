const Cake = require('mongoose').model('Cake');
const { Http } = require('@status/codes');

module.exports = {
  create(req, res) {
    console.log('Req body', req.body);
    console.log('Req params', req.params);
    const { id: cake_id } = req.params;
    Cake.findById(cake_id)
      .then(cake => {
        cake.comments
          .create(req.body)
          .then(comm => res.json(comm))
          .catch(error => {
            const errors = Object.keys(error.errors).map(
              key => error.errors[key].message
            );

            res.status(Http.UnprocessableEntity).json(errors);
          });
      })
      .catch(error => res.status(Http.UnavailableForLegalReasons).json(error));
  },
};
