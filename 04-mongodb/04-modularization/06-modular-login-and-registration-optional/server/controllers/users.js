const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

User = mongoose.model('User');

module.exports = {
  index: function(req, res) {
    if (req.session.user_id) {
      User.find({ _id: req.session.user_id })
        .then(user => {
          console.log('User here: ', user);
          res.render('dashboard', { user })
        })
        .catch(error => { console.log('Cannot find user: ', error) })
    }
    res.render('index');
  },

  login: function(req, res) {
    console.log('Login body req data: ', req.body);
    User.find({ email: req.body.email })
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
  },

  register: function(req, res) {
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
      .catch(err => { console.log('Bcrypt part something wrong: ', err) })
  },

  logout: function(req, res) {
    req.session.destroy();
    res.redirect('/');
  }
}