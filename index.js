const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Db = require('./model/model')

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/test', {
 useNewUrlParser: true,
 useUnifiedTopology: true,
});

Db();



app.use(bodyParser.json());
   

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
