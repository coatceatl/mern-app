const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys.js');

const User = mongoose.model('users');

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  },
  (accessToken, refreshToken, profile, cb) => {

    User.findOne({ googleId: profile.id }).then((existingUser) => {
      if(existingUser) {
        // DB have a user
      } else {
        //DB don't have a user? creating a new user
        new User({ googleId: profile.id }).save();
      }
    })
  }
));
