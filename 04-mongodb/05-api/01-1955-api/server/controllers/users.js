const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

User = mongoose.model('User');
module.exports = {
  index: function(req, res) {
    console.log('Here')
    User.find({birthday : {"$gte": new Date(1955, 1, 01), "$lt": new Date(1955, 12, 31)}}, function(err, users) {
      if(err) {
        console.log('Returned error', err);
        res.json({message: "Error", error: err });
      } else {
        res.json({message: "Success", data: users });
      }
    
    })
   
  },

  new: function(req, res) {
    console.log(req.params.name);
    User.create({
      first_name: req.params.name,
      last_name: req.params.name,
      email: req.params.name + "@gmail.com",
      password: req.params.name + "Hash13i123j13n",
      birthday: new Date(1955, 1, 01)
    })

    res.send({ message: "Success" })
  },

  delete: function(req, res) {
    console.log(req.params.name);
    User.remove({first_name: req.params.name}, function(err, data) {
      if(err) {
        console.log('Returned error', err);
        res.send({message: "Error", data: err})
      } else {
        res.send({message: "Success"})
      }
    })
  },

  getone: function(req, res) {
    console.log(req.params.name);
    User.find({first_name: req.params.name}, function(err, data) {
      if(err) {
        console.log("Returned error", err);
        res.send({ message: "Error", error: err })
      } else {
        res.send({ message: "Success", data: data })
      }
    })
  }
}