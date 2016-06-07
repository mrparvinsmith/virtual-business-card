var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

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

userSchema.methods.validatePassword = function(pwd) {
  return bcrypt.compareSync(pwd, this.password);
};

userSchema.methods.encrypt = function(pwd) {
  return bcrypt.hashSync(pwd, 8);
};

userSchema.plugin(require('mongoose-bcrypt'));

var User = mongoose.model('User', userSchema);

module.exports = User;

