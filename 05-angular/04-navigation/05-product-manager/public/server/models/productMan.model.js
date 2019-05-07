const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Product title must be longer that 4 chars'],
      minlength: 3,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    image_url: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Product', ProductSchema);
