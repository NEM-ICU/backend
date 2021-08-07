const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const postRouter = require('./routes/postRoutes');

const app = express();
app.use(cors());

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());


// 3) ROUTES
app.use('/api/v1/posts', postRouter);

module.exports = app;