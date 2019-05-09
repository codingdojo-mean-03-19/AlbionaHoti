const Author = require('mongoose').model('Author');
const { Http } = require('@status/codes');

module.exports = {
  // retrieving all of a resource (authors: Author[])
  index(_req, res) {
    Author.find({})
      .then(authors => res.json(authors))
      .catch(error => res.status(Http.InsufficientStorage).json(error));
  },

  // create a resource
  create(req, res) {
    console.log('req.body', req.body);
    console.log('req.body', req.params);
    Author.create(req.body)
      .then(author => res.json(author))
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
    const { author_id: authorId } = req.params;
    console.log('author id: ', authorId);
    Author.findById(authorId)
      .then(author => res.json(author))
      .catch(error => res.status(Http.UnavailableForLegalReasons).json(error));
  },

  // update a single resource
  update(req, res) {
    console.log('req params: ', req.params);
    console.log('req body: ', req.body);
    const { author_id: authorId } = req.params;
    console.log('author id: ', authorId);
    Author.findByIdAndUpdate(authorId, req.body, { new: true })
      .then(author => res.json(author))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );

        res.status(Http.UnprocessableEntity).json(errors);
      });
  },

  // destroy/delete/remove a single resource
  destroy(req, res) {
    const { author_id: authorId } = req.params;
    Author.findByIdAndRemove(authorId)
      .then(author => res.json(author))
      .catch(error => res.status(Http.ResetContent).json(error));
  },
};
