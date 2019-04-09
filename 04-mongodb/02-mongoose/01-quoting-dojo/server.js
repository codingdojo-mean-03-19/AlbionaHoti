const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('express-flash');
const port = process.env.PORT || 8000;

const app = express();

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
var Quote = mongoose.model('Quote');

app.get('/', function (req, res) {
  res.render('index');
});

app.post('/quotes', function (req, res) {
  console.log("Post data: ", req.body);

  var quote = new Quote({ name: req.body.name, quote: req.body.quote });

  quote.save(function (err) {
    if (err) {
      console.log('Something went wrong: ', err);
      // flash messages here
      for(var key in err.errors) {
        req.flash('quotes', err.errors[key].message);
      }
      res.redirect('/')
    } else {
      console.log('Successfully added a new Quote!');
      res.redirect('/quotes')
    }

  })
})

app.get('/quotes', function (req, res) {
  Quote.find({}, function (err, quotes) {
    if (err) { console.log("Error: ", err) };
    res.render('quotes', { quotes: quotes.reverse() });
  })
})

app.listen(port, () => console.log(`Express server listening on port ${port}`));