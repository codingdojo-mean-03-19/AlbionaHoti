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

const { Schema } = mongoose;

mongoose.connect('mongodb://localhost/message_board', { useNewUrlParser: true });

mongoose.Promise = global.Promise;

var CommentSchema = new mongoose.Schema({
  comment: { type: String,  minlength: 10, trim: true },
  message: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Message',
      required: true
    }
  ]
}, { timestamps: true });

var MessageSchema = new mongoose.Schema({
  message: { type: String, required: [true, "Message is required!"], minlength: 10 },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ]
}, { timestamps: true });

var UserSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name is required!"], minlength: 5 },
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Message'
    }
  ]
}, { timestamps: true });

var Comment = mongoose.model('Comment', CommentSchema);
var Message = mongoose.model('Message', MessageSchema);
var User = mongoose.model('User', UserSchema);

app.get('/messages', function(req, res) {
  Message.find({})
    .populate('comments')
    .then(messages => res.render('index', { messages: messages.reverse() }))
});

app.post('/message', function(req, res) {
  console.log("Message req body: ", req.body);
  // we Create a new user and message with the data from req.body

  Message.create(req.body)
    .then(message => {
      console.log('Message created: ', message);
      res.redirect('/messages');
    })
    .catch(err => { console.log("Error on message create: ", err)});
});

app.listen(port, () => console.log(`Express server listening on port: ${port}!`));
