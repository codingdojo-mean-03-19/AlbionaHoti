const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const axios = require('axios');

const port = process.env.PORT || 8000;

const app = express();
const url = 'https://swapi.co/api/people'
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

app.get('/', function(req, res) {
  res.render('index');
});


app.get('/people', function(req, res) {
  // use the axios .get() method - provide a url and chain
  // the .then() and .catch() methods
  axios.get(url)
  .then(data => {
    // log the data before moving on
    // console.log('='* 80, data);
    // rather than rendering, just send back the json data;
    res.json(data.results);
    // console.log('~'* 90, res.json(data));
  })
  .catch(error => {
    // log the reror before moving on
    // console.log('~~'*80, error);
    res.json(error);
  })
});

app.listen(port, () => console.log(`Express server listening on port ${port}!`));
