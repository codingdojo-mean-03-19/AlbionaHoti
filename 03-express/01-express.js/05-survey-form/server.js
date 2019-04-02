const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');

const port = process.env.PORT || 8000;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

app.get('/', function(req, res){
  res.render('index');
});

app.post('/results', function(req, res) {
  console.log('Data -- : ', req.body);
  our_data = {
    name: req.body.name,
    location: req.body.location,
    favorite_lang: req.body.favorite_lang,
    comment: req.body.comment
  }

  res.render('results', {results: our_data})
})

app.listen(port, () => console.log(`Express server listening on port ${port}!`));