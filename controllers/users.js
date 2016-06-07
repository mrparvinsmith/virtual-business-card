var User = require('../models/user');
var controller = {};

controller.index = function(req, res){
  User.find({}, function(err, users){
    if(err) throw err;
    res.json(users);
  });
};

controller.show = function(req, res){
  User.findById(req.params.id, function(err, user){
    if(err) throw err;
    res.render('profile', {message: 'this is user show', user: req.user});
  });
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

module.exports = controller;
