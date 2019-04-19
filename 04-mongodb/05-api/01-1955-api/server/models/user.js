const mongoose = require('mongoose');
const { Schema } = mongoose;

var UserSchema = new Schema({
  first_name: { type: String, required: [true, "First name is required!"], trim: true },
  last_name: { type: String, required: [true, "Last name is required!"], trim: true },
  email: {type: String, required: [true, "Email is required!"], trim: true },
  password: { type: String, required: [true, "Password is required and should be longer then 8 characters"], minlength: 8},
  birthday: { type: Date, required: true }
}, 
{ timestamps: true },
{ typeKey: '$type' })

mongoose.model('User', UserSchema);