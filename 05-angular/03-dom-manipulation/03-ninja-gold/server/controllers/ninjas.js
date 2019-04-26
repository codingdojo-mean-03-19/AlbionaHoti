const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

Ninja = mongoose.model('Ninja');
module.exports = {
  ninjas: function (_req, res) {
    console.log('Here --')
    Ninja.find({}, function (err, ninjas) {
      if (err) {
        console.log('Returned error', err);
        res.json({ message: "Error", error: err });
      } else {
        res.json({ message: "Success", ninjas: ninjas });
      }

    })
  },

  create: function (req, res) {
    console.log("Body: ", req.body);
    console.log("Params: ", req.params);
    Ninja.create({
      title: req.body.title,
      gold_amount: req.body.gold_amount
    })
    .then(data => {
      console.log('Data from creating ninja: ', data);
      res.send({message: "Success", ninja_gold: data});
    })
    .catch(err => 
      res.send({ error: err }))
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