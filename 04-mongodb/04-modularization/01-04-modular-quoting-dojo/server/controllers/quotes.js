const mongoose = require('mongoose');
Quote = mongoose.model('Quote');

module.exports = {
  index: function(req, res) {
    res.render('index');
  },

  create: function(req, res) {
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
  },
  get_quotes: function(req, res) {  
    Quote.find({}, function (err, quotes) {
      if (err) { console.log("Error: ", err) };
      res.render('quotes', { quotes: quotes.reverse() });
    })
  }
}