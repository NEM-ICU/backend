const express = require('express');
const postController = require('../controllers/postController');

const postRouter = express.Router();

// router.param('id', postController.checkID);

postRouter
  .route('/')
  .get(postController.getAllPosts)
  .post(postController.createPost);


module.exports = postRouter;
