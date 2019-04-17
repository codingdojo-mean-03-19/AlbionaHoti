const  express = require('express'),
 bodyParser = require('body-parser'),
 path = require('path'),
 mongoose = require('mongoose'),
 session = require('express-session'),
 flash = require('express-flash');
 port = process.env.PORT || 8000;

 app = express();

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

mongoose.connect('mongodb://localhost/quote_db', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

var QuoteSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 5 },
  quote: { type: String, required: true, minlength: 8 }
}, { timestamps: true });

mongoose.model('Quote', QuoteSchema); // we are setting this Schema in our models as 'Quote'
require('./server/config/routes')(app);

app.listen(port, () => console.log(`Express server listening on port ${port}`));