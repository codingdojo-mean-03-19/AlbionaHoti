const mongoose = require('mongoose');
const { Schema } = mongoose;

const QuoteSchema = new Schema({
  title: { type: String, required: [true, 'Title is required'], trim: true },
  vote: { type: Number, required: true, default: 0 },
  author: { type: Schema.Types.ObjectId, ref: 'Author' },
});
const AuthorSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Author name must be longer that 3 chars'],
      minlength: 3,
      trim: true,
    },
    quotes: [QuoteSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Author', AuthorSchema);
module.exports = mongoose.model('Quote', QuoteSchema);
