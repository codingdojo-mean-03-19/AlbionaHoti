const mongooses = require('./../controllers/mongooses');

module.exports = function (app) {
  app.get('/', function (req, res) {
    mongooses.index(req, res);
  });

  app.post('/mongooses', function (req, res) {
    console.log("POST: '/mongooses', : ", req.body);
    // take data from 'new' view to post into here. register it into db
    mongooses.create(req, res);
  });

  app.get('/mongooses/edit/:id', function (req, res) {
    console.log(req.params.id);
    // get data for that specific mongoose and pass to edit view
    mongooses.findOne(req, res);
  });

  app.post('/mongooses/:id', function (req, res) {
    console.log(req.params.id);
    mongooses.addOne(req, res);
  });

  app.get('/mongooses/new', function (req, res) {
    // render the form to add new mongoose
    mongooses.renderNew(req, res);
  });

  app.post('/mongooses/destroy/:id', function (req, res) {
    // delete the mongoose from db
    mongooses.removeOne(req, res);
  });
}