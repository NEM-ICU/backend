const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'A post must have a username'],
    unique: true,
    trim: true
  },
  date: {
    type: Date,
    default: Date.now(),
    select : false
  },
  userProfilePic:{
    type: String,
    required: [true, 'A post must have a profilePic']
  },
  postDesc: {
    type: String,
    required: [true, 'A post must have description'],
    trim: true
  },
  postImages: [String],
  postReactions: {
    type: Object,
    required:[true, 'A post must have reactions']

  },
  

});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;