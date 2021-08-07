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

// get post by id

exports.getPostsById = async (req, res) => {

  try{

  const posts = await Post.findById(req.params.id);
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

// update post by id

exports.updatePost = async (req, res) => {

  try{

  const posts = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
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

// find and delete

exports.deletePost = async (req, res) => {

  try{

  const posts = await Post.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success'
    });
  }catch(err){

    res.status(400).json({
      status: 'fail',
      message: err
    })
  }
};