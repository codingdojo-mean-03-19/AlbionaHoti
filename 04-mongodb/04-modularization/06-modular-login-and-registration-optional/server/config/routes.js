const user = require('./../controllers/users');

module.exports = function (app) {
  app.get('/', (req, res) => {
    user.index(req, res);
  });

  app.post('/login', (req, res) => {
    user.login(req, res);
  });

  app.post('/register', (req, res) => {
    user.register(req, res);
  });

  app.get('/logout', (req, res) => {
    user.logout(req, res);
  })
}