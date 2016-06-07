var db = require('./config/db');
var User = require('./models/user');

User.remove({})
  .then(function(){
    process.exit();
  });
