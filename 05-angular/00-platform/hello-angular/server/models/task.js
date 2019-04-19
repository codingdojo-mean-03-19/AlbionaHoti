const mongoose = require('mongoose');
const { Schema } = mongoose;

var TaskSchema = new Schema({
  title: { type: String, required: [true, "First name is required!"], trim: true },
  description: { type: String, required: [true, "Last name is required!"], trim: true, default: "" },
  completed: {type: String, required: [true, "Email is required!"], trim: true, default: false },
}, 
{ timestamps: true },
{ typeKey: '$type' })

mongoose.model('Task', TaskSchema);