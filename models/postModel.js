const mongoose = require("mongoose");

  // create schema and model

  const postSchema = new mongoose.Schema({

    name: {
      type: String,
      required: [true, 'A post must have a name']
    },
    rating: {
      type: Number,
      default: 4.5
    },
    price: {
      type: Number,
      required: [true, 'A post must have a price']
    }  
  });

  const Post = mongoose.model('Post', postSchema);

  module.exports = Post;