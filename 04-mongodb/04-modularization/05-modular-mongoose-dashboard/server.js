const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');

const flash = require('express-flash');
const port = process.env.PORT || 8000;

const app = express();

app.use(express.static(path.join(__dirname, './client/static')));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(flash());
app.use(session({
  secret: 'keyboardkitteh',
  resave: false, 
  saveUninitialized: true,
  cookie: { maxAge: 60000, secure: !true }
}));

require('./server/config/mongoose');
require('./server/models/mongoose');
require('./server/config/routes')(app);

app.listen(port, () => console.log(`Express server listening on port ${port}`));