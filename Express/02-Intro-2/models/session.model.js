var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	name: String,
	phone: String,
	email: String,
	password: String
});
var User = mongoose.model('User', userSchema, 'users');
module.exports = User;