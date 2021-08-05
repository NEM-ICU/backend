// Express $ mongoose

const express = require("express");
const app = express();

// get request for controller

// 3) ROUTES
const postRouter = require('./routes/postRoutes');
app.use('/api/v1/post', postRouter);

module.exports = app;
  