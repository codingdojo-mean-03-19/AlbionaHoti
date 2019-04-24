const  authorController  = require('../controllers/authors');
const  bookController  = require('../controllers/books');
const bodyParser = require('body-parser');

module.exports = function(app) {
  app.get('/authors', (req, res) => {
    authorController.index(req, res);
  });

  app.post('/authors', (req, res) => {
    authorController.create(req, res);
  });

  app.get('/authors/:author_id', (req, res) => {
    authorController.show(req, res);
  });

  app.put('/authors/:author_id', (req, res) => {
    authorController.update(req, res);
  });

  app.delete('/authors/:author_id', (req, res) => {
    authorController.destroy(req, res);
  });

  app.post('/books', (req, res) => {
    bookController.create(req, res);
  })
}