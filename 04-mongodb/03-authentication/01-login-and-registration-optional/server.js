const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('express-flash');
const port = process.env.PORT || 8000;
const bcrypt = require('bcrypt');
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

/* 
  connect mongoose to mongodb
  mongoose provides more structure to mongoDB by adding Schemas
  -> we can create schemas -> that turn into models for our collections

*/

const { Schema } = mongoose;

mongoose.connect('mongodb://localhost/login_register', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('Connected to MongoDB'));

mongoose.Promise = global.Promise;

var UserSchema = new Schema({
  first_name: { type: String, required: [true, "First name is required!"], trim: true },
  last_name: { type: String, required: [true, "Last name is required!"], trim: true },
  email: {type: String, required: [true, "Email is required!"], trim: true },
  password: { type: String, required: [true, "Password is required and should be longer then 8 characters"], minlength: 8},
  birthday: { type: Date, required: true }
}, 
{ timestamps: true },
{ typeKey: '$type' })

const User = mongoose.model('User', UserSchema);

app.get('/', (req, res) => {
  if(req.session.user_id) {
    User.find({_id: req.session.user_id})
      .then(user => {
        console.log('User here: ', user);
        res.render('dashboard', { user })
      })
      .catch(error => { console.log('Cannot find user: ', error)})  
  }
  res.render('index');
});

app.post('/login', (req, res) => {
  console.log('Login body req data: ', req.body);
  User.find({email: req.body.email})
    .then(user => {
      console.log('Req body pass', req.body.password)
      console.log('user', user[0].password)
      bcrypt.compare(req.body.password, user[0].password)
        .then(result => {
          console.log('User here: ', user);
          res.render('dashboard', { user: user[0] })
          req.session.user_id = user[0]._id;
        })
        .catch(error => {
          console.log('Something went wrong while logging', error);
          res.redirect('/');
        })
    })
    .catch(error => {
      res.redirect('/');
      console.log("Something went wrong: ", error);
    });
});

app.post('/register', (req, res) => {
  console.log('Login body req data: ', req.body);
  bcrypt.hash(req.body.password, 10)
    .then(hashed_pw => {
      const data = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: hashed_pw,
        birthday: req.body.birthday
      }
      User.create(data)
        .then(user => {
          console.log('User created: ', user);
          res.redirect('/');
        })
        .catch(err => console.log('Something wrong happened: ', err));
      // res.redirect('/');
    })
    .catch(err => { console.log('Bcrypt part something wrong: ', err)})
});

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
})

app.listen(port, () => console.log(`Express server listening on port ${port}!`));
