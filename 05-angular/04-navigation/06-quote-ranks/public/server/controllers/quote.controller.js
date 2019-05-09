const Quote = require('mongoose').model('Quote');
const Author = require('mongoose').model('Author');
const { Http } = require('@status/codes');

module.exports = {
  create(req, res) {
    console.log('req.params', req.params);
    const { author_id: authorId } = req.params;
    console.log('req.body', req.body);
    Author.findById(authorId)
      .populate('quotes')
      .then(author => {
        console.log('author found: ', author);
        author.quotes.push(req.body);
        author.save();
        res.json(author);
      })
      .catch(error => res.status(Http.UnavailableForLegalReasons).json(error));
  },

  // retrieving all of a resource (quotes: Quote[])
  showQuotes(req, res) {
    console.log('req.params', req.params);
    const { author_id: authorId } = req.params;
    Author.findById(authorId)
      .populate('quotes')
      .then(author => {
        author.quotes
          .find({})
          .then(quotes => res.json(quotes))
          .catch(error => res.status(Http.InsufficientStorage).json(error));
      })
      .catch(error => res.status(Http.NoContent).json(error));
  },

  destroy(req, res) {
    console.log('req.params', req.params);
    const { quote_id: quoteId } = req.params;
    const { author_id: authorId } = req.params;
    Author.findById(authorId)
      .then(author => {
        console.log('found author', author);
        Author.quotes
          .findByIdAndRemove(quoteId)
          .then(data => {
            res.json(data);
          })
          .catch(error => res.status(Http.ServiceUnavailable).json(error));
      })
      .catch(error => {
        res.status(Http.NoContent).json(error);
      });
  },
};
