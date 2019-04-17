const mongoose = require('mongoose');
Mongoose = mongoose.model('Mongoose');

module.exports = {
  index: function(req, res) {
    Mongoose.find({}, function (err, mongooses) {
      if (err) { console.log('Error -----:', err) };
      res.render('index', { data: mongooses.reverse() });
    })
  },
  create: function(req, res) {
    var mongoose = new Mongoose({ name: req.body.name, color: req.body.color });

    mongoose.save(function (err) {
      if (err) {
        console.log('Something went wrong: ', err);
        for (var key in err.errors) {
          req.flash('mongooses', err.errors[key].message);
        }
        res.redirect('/');
      } else {
        console.log('Successfully added a new Mongoose!');
        res.redirect('/');
      }
    })
  },
  findOne: function(req, res) {
    Mongoose.findOne({ _id: req.params.id }, function (err, mongoose) {
      if (err) { console.log('Error : ', err) };
      res.render('edit', { data: mongoose })
    })
  },

  addOne: function(req, res) {
    // from the /mongooses/edit/:id get the data that came in req.body
    // register the data into the db
    // and redirect to mongooses/edit/:id  
    Mongoose.findOne({ _id: req.params.id }, function (err, mongoose) {
      mongoose.name = req.body.name;
      mongoose.color = req.body.color;
      mongoose.save(function (err) {
        if (err) {
          console.log('Error on mongoose update: ', err)
          for (var key in err.errors) {
            req.flash('editingMongooses', err.errors[key].message);
          }
        }
        res.redirect(`/mongooses/edit/${req.params.id}`);
        // res.redirect('/');
        console.log('Update successfully: ');
      })
    })
  },

  renderNew: function(req, res) {
    res.render('new');
  },

  removeOne: function(req, res) {
    Mongoose.remove({ _id: req.params.id }, function (err) {
      if (err) {
        console.log('Error on removing the mongoose: ', err);
        res.redirect('/');
      }
      res.redirect('/');
    })
  }
}