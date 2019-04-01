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
  const user = 'User';
  let count = 0;
  if (!req.session.user) {
    req.session.user = user;
    count++;
    req.session.count = count;

    console.log('Inside if: Count', count);
  } else if(req.session.user) {
    req.session.count ++;

    console.log('Inside else: Count', count);
  }

  console.log('Count', count);
  res.render('index', { count: req.session.count });
});


app.listen(port, () => console.log(`Express server listening on port ${port}!`));
