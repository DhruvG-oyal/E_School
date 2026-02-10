const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    id: {
      type: String,
      required: true,
      unique: true,
    }
  }, { timestamps: true });
  
  const Card = mongoose.model('Card', cardSchema);

  module.exports ={
    Card
  }