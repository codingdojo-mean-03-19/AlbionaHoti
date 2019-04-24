const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

Task = mongoose.model('Task');
module.exports = {
  tasks: function (req, res) {
    console.log('Here')
    Task.find({}, function (err, tasks) {
      if (err) {
        console.log('Returned error', err);
        res.json({ message: "Error", error: err });
      } else {
        res.json({ message: "Success", tasks: tasks });
      }

    })
  },

  getOne: function (req, res) {
    console.log(req.params.id);
    Task.findById({ _id: req.params.id }, function (err, data) {
      if (err) {
        console.log("Returned error", err);
        res.send({ message: "Error", error: err })
      } else {
        res.send({ message: "Success", task: data })
      }
    })
  },

  create: function (req, res) {
    console.log(req.params.title);
    Task.create({
      title: req.params.title
    })
    res.send({ message: "Success" })
  },

  update: function (req, res) {
    console.log(req.params.id);
    Task.find({ _id: req.params.id }, function (err, data) {
      if (err) {
        console.log('Returned error', err);
        res.send({ message: "Error", error: err })
      } else {
        res.send({ message: "Success", task: data })
      }
    })
  },

  delete: function (req, res) {
    console.log(req.params.id);
    Task.delete({ _id: req.params.id }, function (err, data) {
      if (err) {
        console.log('Returned error', err);
        res.send({ message: "Error", data: err })
      } else {
        res.send({ message: "Success" })
      }
    })
  },
}