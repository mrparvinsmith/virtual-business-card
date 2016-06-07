var mongoose = require('mongoose');

// change the link below!
var mongoUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/business-card';

mongoose.connect(mongoUrl, function(err){
  if(err) throw err;
  console.log('database connected');
});

module.exports = mongoose;
