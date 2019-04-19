const user = require('./../controllers/users'),
      
      bodyParser = require('body-parser');


module.exports = function (app) {
  app.use(bodyParser.json());
  app.get('/', (req, res) => {
    user.index(req, res);
  });

  app.get('/new/:name', (req, res) => {
    user.new(req, res);
  });

  app.get('/remove/:name', (req, res) => {
    user.delete(req, res);
  });

  app.get('/:name', (req, res) => {
    user.getone(req, res);
  })
}