const express = require('express');
const postController = require('./../controllers/postController');

const router = express.Router();

// routes

router
  .route('/')
  .get(postController.getAllPosts)
  .post(postController.createPosts);

router
  .route('/:id')
  .get(postController.getPosts)
  .patch(postController.updatePosts)
  .delete(postController.deletePosts);

module.exports = router;
