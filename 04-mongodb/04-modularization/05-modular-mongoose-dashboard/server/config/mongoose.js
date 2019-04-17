const mongoose = require('mongoose');

var MongooseSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 5 },
  color: { type: String, required: true, minlength: 5 }
}, { timestamps: true });

mongoose.model('Mongoose', MongooseSchema);