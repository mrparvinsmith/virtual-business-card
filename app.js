var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var logger = require('morgan');

var app = express();

app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

app.use( express.static(path.join(__dirname + '/public')));

app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
  res.render('index');
});

var mongoose = require('mongoose');

// change the link below!
var mongoUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/business-card';

mongoose.connect(mongoUrl, function(err){
  if(err) throw err;
  console.log('database connected');
});

var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('listening on ' + port);
});
