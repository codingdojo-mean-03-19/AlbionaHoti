const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('express-flash');
const port = process.env.PORT || 8000;
const bcrypt = require('bcrypt');
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
  cookie: { maxAge: 60000 }
}));

/* 
  connect mongoose to mongodb
  mongoose provides more structure to mongoDB by adding Schemas
  -> we can create schemas -> that turn into models for our collections

*/

require('./server/config/mongoose');
require('./server/models/user');
require('./server/config/routes')(app);



app.listen(port, () => console.log(`Express server listening on port ${port}!`));
