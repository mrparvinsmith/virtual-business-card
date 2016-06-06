var User = require('../models/user');
var controller = {};

controller.index = function(req, res){
  res.json({message: 'hello from users index'});
};

module.exports = controller;
