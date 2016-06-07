var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var logger = require('morgan');
var User = require('./models/user');

var app = express();

app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

app.use( express.static(path.join(__dirname + '/public')));

app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// set up database
var db = require('./config/db');

// authentication and session stuff
var session      = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, cb){
    User.findOne({username: username}, function(err, user){
      if (err) { return cb(err); }
      if (!user) {return cb(null, false); }
      if (!user.validatePassword(password)) {return cb(null, false);}
      return cb(null, user);
    });
  }));

passport.serializeUser(function(user, cb) {
  console.log(user);
  cb(null, user);
});

passport.deserializeUser(function(id, cb) {
  User.findOne(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

app.use(session({ secret: 'unicorns', resave: false, saveUninitialized: false }));

app.use(passport.initialize());
app.use(passport.session());

// routes
app.get('/', function(req, res){
  res.render('index', {user: req.user});
});

app.get('/error', function(req, res){
  res.render('error', {message: 'login failed'});
});

app.post('/signup', function(req, res) {
  var body = req.body;
  var user = new User();
  user.username = body.username;
  user.email = body.email;
  user.password = user.encrypt(body.password);
  user.save(function(err) {
    if (err) res.render('error', {message: err});
    req.login(user, function(err){
      if (err) throw err;
      res.redirect('/');
    });
  });
});

app.post('/login',
  passport.authenticate('local', { failureRedirect: '/error', message: 'there was an error' }),
  function(req, res){
    res.redirect('/');
  });

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


var userRoutes = require('./routes/users');

app.use('/users', userRoutes);

var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('listening on ' + port);
});
