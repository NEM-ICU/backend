const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'A post must have a username'],
    unique: true,
    trim: true
  },
  profilePic:{
    type: String,
    required: [true, 'A post must have a profilePic']
  },
  description: {
    type: String,
    required: [true, 'A post must have description'],
    trim: true
  },
  postImages: [String],
  reactions: {
    type: Object,
    required:[true, 'A post must have reactions']

  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select : false
  },

});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;