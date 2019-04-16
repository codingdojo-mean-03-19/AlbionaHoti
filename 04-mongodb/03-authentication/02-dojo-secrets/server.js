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
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

/* 
  connect mongoose to mongodb
  mongoose provides more structure to mongoDB by adding Schemas
  -> we can create schemas -> that turn into models for our collections

*/

const { Schema } = mongoose;

mongoose.connect('mongodb://localhost/dojo_secrets', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('Connected to MongoDB'));

mongoose.Promise = global.Promise;

var UserSchema = new Schema({
  first_name: { type: String, required: [true, "First name is required!"], trim: true },
  last_name: { type: String, required: [true, "Last name is required!"], trim: true },
  email: { type: String, required: [true, "Email is required!"], trim: true },
  password: { type: String, required: [true, "Password is required and should be longer then 8 characters"], minlength: 8 },
  birthday: { type: Date, required: true },
  secrets: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Secret'
    }
  ]
},
  { timestamps: true },
  { typeKey: '$type' })

var SecretSchema = new Schema({
  secret : { type: String, required: [true, "Secret must be longer than 10 characters"], minlength: 7, trim: true },
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
      required: true
    }
  ]
}, { timestamps: true });

var CommentSchema = new Schema({
  comment: { type: String, required: [true, "Comment must be longer than 10 characters"], minlength:10, trim: true },
  secret: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Secret'
    }
  ]
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);
const Secret = mongoose.model('Secret', SecretSchema);
const Comment = mongoose.model('Comment', CommentSchema);

app.get('/', (req, res) => {
  if (req.session.user_id) {
    console.log('Here we are at the rooot ....------------------', req.session.user_id)
    User.find({ _id: req.session.user_id })
      // .populate('secrets')
      .then(user => {
        console.log('User here: ', user);
        return Secret.find({})
          // .populate('user')
          .then(secrets => {
            console.log("---------------------------------------------------------------------------------------------=========================Secrets[0]", secrets[0])
            console.log("---------------------------------------------------------------------------------------------=========================User[0]", user[0])
            res.render('dashboard', { user: user[0], secrets: secrets.reverse() })
          })
      })
      .catch(error => { console.log('Cannot find user: ', error) })
  } else {
    res.render('index');
  }
});

app.post('/login', (req, res) => {
  console.log('Login body req data: ', req.body);
  User.find({ email: req.body.email })
    .then(user => {
      console.log('Req body pass', req.body.password)
      console.log('user', user[0].password)
      bcrypt.compare(req.body.password, user[0].password)
        .then(result => {
          console.log('User here: ', user);
          req.session.user_id = user[0]._id;
          res.redirect('/');
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
        .catch(err => {
          for(var key in err.errors) {
            req.flash('register', err.errors[key].message);
          }
          console.log('Something wrong happened: ', err)
          res.redirect('/');
        });
    })
    .catch(err => { console.log('Bcrypt part something wrong: ', err) })
});

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
})

app.get('/secrets', (req, res) => {
  res.redirect('/');
});

app.post('/secret/:id', (req, res) => {
  Secret.remove({_id: req.params.id});
  res.redirect('/');
});

app.post('/secrets', (req, res) => {
  console.log('Body data: ', req.body);
  Secret.create(req.body)
    .then(secret => {
      console.log('Secret created: ', secret);
      console.log('Secret user: ', secret.user);
      return User.findById(secret.user)
        .then(user => {
          console.log('User in secret here: ', user);
          user.secrets.push(secret._id);

          return user.save();
        })
        .then(() => {
          res.redirect('/');
        })
        .catch(error => {
          for(var key in error.errors) {
            req.flash('users', error.errors[key].message);
          }
          console.log('Something went wrong here: ', err)
          res.redirect('/');
        });
    })
    .catch(error => {
      for(var key in error.errors) {
        req.flash('secrets', error.errors[key].message);
      }
      console.log('Something wrong happened: ', error) 
      res.redirect('/')
    });
})

app.get('/secret/:id', (req, res) => {
  console.log('Secret: ',req.params.id);
  console.log('Secret: ',req.body);
  Secret.findById(req.params.id)
    .then(secret => {
      console.log('Secret: ', secret);
      return User.findById(secret.user)
        .then(user => {
          console.log('Ussssser', user);

          return Comment.find({secret: secret._id})
            .populate('secret')
            .then(comments => {
              console.log("Leeeeet's watch comments: ", comments);
              res.render('profile', { secret, user, comments: comments.reverse() })
            })
            .catch(error => {
              for(var key in error.errors) {
                req.flash('comments', error.errors[key].message);
              }
              res.redirect(`/secret/${req.params.id}`)
            })
        })
        .catch(error => {
          console.log('Something went wrong: ', error);
          res.render('/')
        });
    })
    .catch(error => {
       console.log('Error in finding secret: ', error) 
       res.redirect('/');  
    });
})

app.post('/comments', (req, res) => {
  console.log("Req body: ", req.body);
  Comment.create(req.body) 
    .then(comment => {
      console.log('Comment:   -', comment);
      res.redirect(`/secret/${req.body.secret}`)
    })
    .catch(error => {
      for(var key in error.errors) {
        req.flash('comments', error.errors[key].message);
      }
      console.log('Something bad happened: ', error);
      res.redirect(`/secret/${req.body.secret}`)
    })
})

app.listen(port, () => console.log(`Express server listening on port ${port}!`));
