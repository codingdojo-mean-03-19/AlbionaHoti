const ninja = require('../controllers/ninjas'),
      
      bodyParser = require('body-parser');


module.exports = function (app) {
  app.use(bodyParser.json());
  
  app.get('/ninjas', (req, res) => {
    ninja.ninjas(req, res);
  });

  // app.get('/tasks/:id', (req, res) => {
  //   task.getOne(req, res);
  // });

  app.post('/ninjas', (req, res) => {
    ninja.create(req, res);
  });

  app.put('/task/:id', (req, res) => {
    task.update(req, res);
  })

  app.delete('/task/:id', (req, res) => {
    task.delete(req, res);
  })
}