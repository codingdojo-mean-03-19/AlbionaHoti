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
  cookie: { maxAge: 60000 }
}));
// connect mongoose to mongodb
// mongoose provides more structure to mongoDB by adding schemas
// -> we can create -> that turn into models for our collections

mongoose.connect('mongodb://localhost/message_board', { useNewUrlParser: true });

mongoose.Promise = global.Promise;

var CommentSchema = new mongoose.Schema({
  comment: { type: String,  minlength: 10 }
}, { timestamps: true });

var MessageSchema = new mongoose.Schema({
  message: { type: String, required: [true, "Message is required!"], minlength: 10 },
  comments: [CommentSchema]
}, { timestamps: true });

var UserSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name is required!"], minlength: 5 },
  messages: [MessageSchema]
}, { timestamps: true });

mongoose.model('Comment', CommentSchema);
var Comment = mongoose.model('Comment');
mongoose.model('Message', MessageSchema);
var Message = mongoose.model('Message');
mongoose.model('User', UserSchema);
var User = mongoose.model('User');

app.get('/', function(req, res) {

  res.render('index');
});

app.post('/message', function(req, res) {
  console.log("Message req body: ", req.body);
  // we Create a new user and message with the data from req.body

  var message = new Message({name: req.body.name, message: req.body.message });
  message.save(function(err) {
    if(err) {
      console.log('Something happened while creating message: ', err);
      for(var key in err.errors) {
        req.flash('messages', err.errors[key].message);
      }
      res.redirect('/');
    } else {
      console.log('Successfully created message');
      res.redirect('/');
    }
  })
});

app.listen(port, () => console.log(`Express server listening on port: ${port}!`));
