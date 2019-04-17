const mongoose = require('mongoose');

var QuoteSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 5 },
  quote: { type: String, required: true, minlength: 8 }
}, { timestamps: true });

mongoose.model('Quote', QuoteSchema); // we are setting this Schema in our models as 'Quote'