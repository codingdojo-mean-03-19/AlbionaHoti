const Author = require('mongoose').model('Author');
const { Http } = require('@status/codes');

module.exports = {
  // create a resource
  create: (req, res) => {
    const { author_id: authorId } = req.params;
    Author.find({_id: authorId}) 
        .then(author => {
          author.books.create(req.body)
                .then(book => res.json(book))
                .catch(error => {
                  const errors = Object.keys(error.errors).map(key => error.errors[key].message);
        
                  res.status(Http.UnprocessableEntity).json(errors);
                });
        })
        .catch(error => {
          const errors = Object.keys(error.errors).map(key => error.errors[key].message);

          res.status(Http.UnprocessableEntity).json(errors);
        });
  },
  // destroy/delete/remove a single resource
  destroy: (req, res) => {
    const { author_id: authorId } = req.params;
    const { book_id: bookId } = req.params;

    Author.findById(authorId)
        .then(author => { 
            Author.books.findByIdAndRemove(bookId)
            .then(book => res.json(book))
            .catch(error => res.status(Http.ResetContent).json(error));
        
        })
        .catch(error => {
          const errors = Object.keys(error.errors).map(key => error.errors[key].message);

          res.status(Http.UnprocessableEntity).json(errors);
        });
      }
};