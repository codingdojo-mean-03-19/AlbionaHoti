const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');

const flash = require('express-flash');
const port = process.env.PORT || 8000;

const app = express();

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(flash());
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000, secure: !true }
}));

mongoose.connect('mongodb://localhost/mongoose', { useNewUrlParser: true });

mongoose.Promise = global.Promise;

var MongooseSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 5 },
  color: { type: String, required: true, minlength: 5 }
}, { timestamps: true });

mongoose.model('Mongoose', MongooseSchema);
var Mongoose = mongoose.model('Mongoose');

app.get('/', function(req, res) {
  Mongoose.find({}, function(err, mongooses) {
    console.log('Mongooses', mongooses[0].name);
    if(err) { console.log('Error -----:', err )};
    res.render('index', { data: mongooses.reverse() });
  })
});

app.post('/mongooses', function(req, res) {
  console.log("POST: '/mongooses', : ", req.body);
  // take data from 'new' view to post into here. register it into db
  var mongoose = new Mongoose({ name: req.body.name, color: req.body.color });

  mongoose.save(function(err) {
    if(err){
      console.log('Something went wrong: ', err);
      for(var key in err.errors) {
        req.flash('mongooses', err.errors[key].message);
      }
      res.redirect('/');
    } else {
      console.log('Successfully added a new Mongoose!');
      res.redirect('/');
    }
  })
});

app.get('/mongooses/edit/:id', function(req, res) {
  console.log(req.params.id);
  // get data for that specific mongoose and pass to edit view
  Mongoose.findOne({_id: req.params.id}, function(err, mongoose) {
    if(err) { console.log('Error : ', err)};
    res.render('edit', { data: mongoose })
  })
});

app.post('/mongooses/:id', function(req, res) {
  console.log(req.params.id);
  // from the /mongooses/edit/:id get the data that came in req.body
  // register the data into the db
  // and redirect to mongooses/edit/:id  
  Mongoose.findOne({_id: req.params.id }, function(err, mongoose) {
    mongoose.name = req.body.name;
    mongoose.color = req.body.color;
    mongoose.save(function(err) {
      if(err) { 
        console.log('Error on mongoose update: ', err)
        for(var key in err.errors) {
          req.flash('editingMongooses', err.errors[key].message);
        }
      }
      res.redirect(`/mongooses/edit/${req.params.id}`);
      // res.redirect('/');
      console.log('Update successfully: ');
    })
  })
});

app.get('/mongooses/new', function(req, res) {
  // render the form to add new mongoose
  res.render('new');
});

app.post('/mongooses/destroy/:id', function(req, res) {
  // delete the mongoose from db
  Mongoose.remove({ _id: req.params.id }, function(err) {
    if(err) {
      console.log('Error on removing the mongoose: ', err);
    }
  })
  res.redirect('/');
});




app.listen(port, () => console.log(`Express server listening on port ${port}`));