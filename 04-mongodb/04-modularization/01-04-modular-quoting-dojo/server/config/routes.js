const mongoose = require('mongoose');
Quote = mongoose.model('Quote');

module.exports = function (app) {
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
        for (var key in err.errors) {
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
  // all other routes
}