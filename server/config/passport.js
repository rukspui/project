var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var User = require('../model/userModel');


module.exports = function (app) {
  //Setup passport
  app.use(session({
    secret: 'some secret string to protect the session',
    resave: false,
    saveUninitialized: true
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    })
  });

  //Set up the Local authentication strategy
  passport.use('local-login', new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },
    function (req, email, password, done) {
      //Find the user by email
      User.findOne({'email': email}, function (err, user) {
        if (err) {
          return done(null, false, err);
        }
        if (!user) {
          return done(null, false, {message: 'User not found'});
        }
        if (!user.checkPassword(password)) {
          return done(null, false, {message: 'Wrong password'});
        }
        return done(null, user);
      })
    }
  ));
};
