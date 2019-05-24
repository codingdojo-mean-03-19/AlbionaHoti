const mongoose = require('mongoose');
const { Schema } = mongoose;

const PlayerSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Name is required'],
      minlength: [2, 'More that 2 char needed'],
    },
    position: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      default: 'Undecided',
    },
  },
  {
    timestamps: true,
  }
);

// const GameSchema = new Schema({});

module.exports = mongoose.model('Player', PlayerSchema);
