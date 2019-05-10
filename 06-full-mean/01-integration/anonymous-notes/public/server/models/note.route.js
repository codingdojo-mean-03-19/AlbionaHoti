const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema(
  {
    content: {
      type: String,
      required: [true, 'Content of note should be minimum of 3 characters.'],
      minlength: 3,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Note', NoteSchema);
