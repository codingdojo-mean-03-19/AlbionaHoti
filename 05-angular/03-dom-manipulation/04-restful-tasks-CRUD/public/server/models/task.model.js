const mongoose = require('mongoose');
const { Schema } = mongoose;

var TaskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required!'],
      minlength: 3,
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required!'],
      minlength: 3,
      trim: true,
      default: '',
    },
    completed: {
      type: Boolean,
      trim: true,
      default: false,
    },
  },
  { timestamps: true },
  { typeKey: '$type' }
);

mongoose.model('Task', TaskSchema);
