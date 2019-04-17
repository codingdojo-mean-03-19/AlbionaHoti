const mongoose = require('mongoose');
const quotes = require('../controllers/quotes');

module.exports = function (app) {
  app.get('/', function (req, res) {
    quotes.index(req, res);
  });

  app.post('/quotes', function (req, res) {
    console.log("Post data: ", req.body);
    quotes.create(req, res);
  })

  app.get('/quotes', function (req, res) {
    quotes.get_quotes(req,res);
  })
}