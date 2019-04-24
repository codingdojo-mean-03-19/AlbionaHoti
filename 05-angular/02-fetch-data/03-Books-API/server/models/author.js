const mongoose = require('mongoose');
const { Schema } = mongoose;

var AuthorSchema = new Schema({
  first_name: { type: String, required: [true, "First name must be at least two characters long"], minlength: 2},
  last_name: { type: String, required: [true, "Last name must be at least two characters long"], minlength: 2 },
  country_origin: { type: String, required: [true, "Country of origin must be at least three characters long"], minlength: 3 },
  birthday: { type: Date, required: true },
  books: new Schema({
    title: { type: String, required: true, minlength: 2 },
    publication_year: { type: Date, required: true },
    author: [{
      type: Schema.Types.ObjectId,
      ref: 'Author'
    }]
  }, { timestamps: true }),
}, { timestamps: true });

module.exports = mongoose.model('Author', AuthorSchema);

