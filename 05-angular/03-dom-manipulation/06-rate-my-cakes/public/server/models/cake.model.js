const mongoose = require('mongoose');
const { Schema } = mongoose;

var CakeSchema = new Schema(
  {
    image: {
      type: String,
      required: [true, 'Image is required!'],
      trim: true,
    },
    baker: {
      type: String,
      required: [true, 'Baker is required'],
    },
    comments: new Schema(
      {
        content: {
          type: String,
          minlength: 3,
          trim: true,
        },
        rate: {
          type: Number,
          required: [true, 'Rating is required!'],
          default: 0,
        },
        cake: [
          {
            type: Schema.Types.ObjectId,
            ref: 'Cake',
          },
        ],
      },
      { timestamps: true },
      { typeKey: '$type' }
    ),
  },
  { timestamps: true },
  { typeKey: '$type' }
);

mongoose.model('Cake', CakeSchema);
