var User = require('../models/user');
var controller = {};

controller.index = function(req, res){
  res.render('user_index', {message: "this is the user index"});
};

controller.create = function(req, res){
  res.json({message: 'this is user create'});
};

controller.show = function(req, res){
  res.json({message: 'this is user show'});
};

controller.emailForm = function(req, res){
  res.render('email_form');
};

controller.sendCard = function(req, res){
  res.json({message: 'card has been sent'});
};

controller.update = function(req, res){
  res.json({message: 'this is user update'});
};

controller.destroy = function(req, res){
  res.json({message: 'this is user destroy'});
};

controller.login = function(req, res){
  res.json({message: 'this is the login'});
};

module.exports = controller;
