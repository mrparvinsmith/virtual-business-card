var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {type: String, unique: true},
  password: String,
  email: {type: String, unique: true},
  name: String,
  cellphone: String,
  homephone: String,
  website: String,
  fax: String,
  company: String,
  linkedin: String,
  jobTitle: String,
});

userSchema.plugin(require('mongoose-bcrypt'));

var User = mongoose.model('User', userSchema);

module.exports = User;

