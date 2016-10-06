var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var config = require("./config/config.js");
var configAuths = require("./config/auths.js");
var mongoose = require("mongoose");
var passport = require("passport");
var fbStrategy = require("passport-facebook").Strategy;

var app = express();

// connecting database //
mongoose.connect(config.database, function(err){
	if(err){
		console.log("error, DB not connected");
	}
	else{
		console.log("DB connected");
	}
});

app.use(bodyParser.urlencoded({extented: true}));
app.use(bodyParser.json());
app.use(morgan("dev"));

//views for angular//
app.use(express.static(__dirname + '/public/views'));

app.get('', function(req,res){
	res.sendFile(__dirname + '/public/views/index.html');
});

//listening function//
app.listen(config.port, function(err){
	if(err){
		console.log("err");
	}
	else{
		console.log("listening to server at port 3000");
	}
});

// fb authentication //
passport.use(new fbStrategy({
    clientID: configAuths.facebook.clientId,
    clientSecret: configAuths.facebook.clientSecret,
    callbackURL: configAuths.facebook.callbackUrl
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate( function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));

// fb routes //
app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback',
	passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/login' }));
