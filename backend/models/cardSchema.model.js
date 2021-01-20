import mongoose from "../server/db.js";

const Schema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title Required'],
    trim: true,
    minlength:[5, 'Minimun title length is 5 characters']
  },
  type:{
    type: String,
    trim: true,
    maxlength: [37, 'Max length is 37 characters']
  },
  text: {
    type: String,
    required: [true, 'Text Required'],
    trim: true,
  }
})

const Card = mongoose.model('Card', Schema);

export default Card;
