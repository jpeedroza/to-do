const mongoose = require('../db');

const Schema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title Required'],
    trim: true,
    minlength:[5, 'Minimun title length is 5 characters']
  },
  type:{
    type: String,
    trim: true
  },
  text: {
    type: String,
    required: [true, 'Text Required'],
    trim: true,
  }
})

const Card = mongoose.model('Card', Schema);

module.exports = Card;
