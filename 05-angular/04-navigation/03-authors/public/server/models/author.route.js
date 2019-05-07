const mongoose = require('mongoose');
const { Schema } = mongoose;

const AuthorSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Author name must be longer that 3 chars'],
      minlength: 3,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Author', AuthorSchema);
