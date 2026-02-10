const mongoose = require('mongoose');

const pcardSchema = new mongoose.Schema({
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
  },
  userid: {
    type: String,
    required: true,
  }
}, { timestamps: true });

const PCard = mongoose.model('PCard', pcardSchema);

module.exports = {
  PCard
};
