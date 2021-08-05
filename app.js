// Express $ mongoose
const express = require("express");
const app = express();

// get request for controller

data = { 'apple': 'apple'};

app.get('/api/v1/tours', (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            data
        }
    })
});



module.exports = app;
  