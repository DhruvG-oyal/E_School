const mongoose = require('mongoose');


const contentItemSchema = new mongoose.Schema({
    maintitle:{
       type: String,
       required:true,
    },
    title: {
      type: [String],
      required: true,
    },
    description: {
      type: [String],
      required: true,
    },
    image: {
      type: [String],
      required: false, 
    }
  }, { _id: false });
  
  const contentSchema = new mongoose.Schema({
    length: {
      type: Number,
      required: true,
    },
    id: {
      type: String,
      required: true,
      unique: true,
    },
    content: {
      type: [contentItemSchema],
      required: true,
    }
  });
  
  const Content = mongoose.model('Content', contentSchema);


module.exports ={
    Content
  }