const Post = require('../models/postModels');

// create posts

exports.createPost = async (req, res) => {

  try{

  const newPost = await Post.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        post: newPost
      }
    });
  }catch(err){

    res.status(400).json({
      status: 'fail',
      message: err
    })
  }
};

// get all posts

exports.getAllPosts = async (req, res) => {

  try{

  const posts = await Post.find();
    res.status(200).json({
      results: posts.lenghth,
      status: 'success',
      data: {
        posts
      }
    });
  }catch(err){

    res.status(400).json({
      status: 'fail',
      message: err
    })
  }
};
