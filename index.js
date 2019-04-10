const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys.js');
const authRoutes = require('./routes/authRoutes.js');
require ('./models/User');
require('./services/passport.js');

mongoose.connect('mongodb://localhost:27017/mern-app', { useNewUrlParser: true }) ;
const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 *1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> {
  console.log('server started');
});
