const  express = require('express'),
 bodyParser = require('body-parser'),
 path = require('path'),
 mongoose = require('mongoose'),
 session = require('express-session'),
 flash = require('express-flash');
 port = process.env.PORT || 8000;

 app = express();

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

require('./server/config/mongoose');
require('./server/models/quote');
require('./server/config/routes')(app);

app.listen(port, () => console.log(`Express server listening on port ${port}`));