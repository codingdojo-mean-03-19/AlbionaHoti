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

app.get('/', function (req, res) {
  let results;
  if (req.session.num) {
    delete req.session.num;
    let random = getRandomArbitrary(1, 100);
    req.session.random = random;
    results = req.session.results;
    console.log("Random: ", req.session.random);
  } else {
    random = getRandomArbitrary(1, 100);
    req.session.random = random;
    delete req.session.results;
    results = 'one';
    console.log("Random after res : ", req.session.random);
  }
  res.render('index', { random: random, results: results });

})

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

app.post('/process', function (req, res) {
  console.log('Data: ', req.body);

  req.session.num = req.body.random;
  let num = req.session.num
  const ran = req.session.random;
  console.log('Ran: ', ran);
  let results;
  if (num == ran) {
    req.session.results = {
      res: `was the number!`,
      resu: `${ran} was the number!`
    }
  } else if (num < ran) {
    req.session.results = {
      res: 'Too low!'
    }
  } else if (num > ran) {
    req.session.results = {
      res: 'Too high!'
    }
  }

  console.log("Res num: ", req.session.results);

  res.redirect('/');
})

app.post('/again', function(req, res){
  req.session.destroy();
  res.redirect('/')
});

app.listen(port, () => console.log(`Express server listening on port ${port}!`));