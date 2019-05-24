const Note = require('mongoose').model('Note');
const { Http } = require('@status/codes');

module.exports = {
  // retrieving all of a resource (authors: Author[])
  index(_req, res) {
    Note.find({})
      .then(notes => res.json(notes))
      .catch(error => res.status(Http.InsufficientStorage).json(error));
  },

  // create a resource
  create(req, res) {
    console.log('req.body', req.body);
    console.log('req.body', req.params);
    Note.create(req.body)
      .then(note => res.json(note))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );

        res.status(Http.UnprocessableEntity).json(errors);
      });
  },
};
