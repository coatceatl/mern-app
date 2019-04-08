const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes.js');
require ('./models/User');
require('./services/passport.js');

mongoose.connect('mongodb://localhost:27017/mern-app', { useNewUrlParser: true }) ;
const app = express();

authRoutes(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> {
  console.log('server started');
});
