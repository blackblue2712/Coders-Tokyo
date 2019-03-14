const db = require('../db');
const md5 = require('md5');

module.exports.getLogin = function (req, res) {
	res.render('auth/login');
}

module.exports.postLogin = function (req, res, next) {
	var email = req.body.email;
	var password = req.body.password;

	var user = db.get('users').find({email: email}).value();

	if(!user) {
		res.render('auth/login', {
			errors: ['Email does not exists'],
			values: req.body
		});
		return;
	}

	var hashedPassword = md5(password);
	console.log(hashedPassword);
	console.log(user.password);
	if(user.password !== hashedPassword) {
		res.render('auth/login', {
			errors: ['Wrong password'],
			values: req.body
		});
		return;	
	}

	res.cookie('userId', user.id, {
		signed: true
	});
	res.redirect('/users');
}