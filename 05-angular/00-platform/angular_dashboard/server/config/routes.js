const task = require('../controllers/tasks'),
      
      bodyParser = require('body-parser');


module.exports = function (app) {
  app.use(bodyParser.json());
  
  app.get('/tasks', (req, res) => {
    task.tasks(req, res);
  });

  app.get('/tasks/:id', (req, res) => {
    task.getOne(req, res);
  });

  app.post('/tasks/:title', (req, res) => {
    task.create(req, res);
  });

  app.put('/task/:id', (req, res) => {
    task.update(req, res);
  })

  app.delete('/task/:id', (req, res) => {
    task.delete(req, res);
  })
}