const Cake = require('mongoose').model('Cake');
const { Http } = require('@status/codes');

module.exports = {
  cakes(_req, res) {
    Cake.find({})
      .then(cakes => {
        console.log('Cakes from db: ', cakes);
        res.json({ message: 'Success', cakes: cakes });
      })
      .catch(error => res.status(Http.InternalServerError).json(error));
  },

  create(req, res) {
    console.log('REQ BODY: ', req.body.cake);
    // const comment = req.body.cake.comments[0].content;

    Cake.create(req.body.cake)
      .then(cake => {
        console.log('CAKE: ', cake);
        res.send(cake);
      })
      // .then(cake_id => {
      //   console.log('yeeeeey', cake_id);
      //   Cake.findById(cake_id).then(cake => {
      //     cake.comments
      //       .create({ comment })
      //       .then(comment => res.json(comment))
      //       .catch(error => {
      //         const errors = Object.keys(error.errors).map(
      //           key => error.errors[key].message
      //         );

      //         res.status(Http.UnprocessableEntity).json(errors);
      //       });
      //   });
      // })
      .catch(error => {
        // we are assuming validation errors
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );
        res.status(Http.UnprocessableEntity).json(errors);
      });
  },

  show(req, res) {
    const { id: cake_id } = req.params;
    Cake.findById({ _id: cake_id })
      .then(cake => res.json({ cake: cake }))
      .catch(error => res.status(Http.UnavailableForLegalReasons).json(error));
  },
};
