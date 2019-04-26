const mongoose = require('mongoose');
const { Schema } = mongoose;

var NinjaSchema = new Schema({
    title: { type: String },
    gold_amount: { type: Number }
}, 
{ timestamps: true },
{ typeKey: '$type' })

mongoose.model('Ninja', NinjaSchema);