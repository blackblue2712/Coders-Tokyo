const db = require('../db');
const shortid = require('short-id');
const User = require('../models/user.model');

module.exports.index = async function (req, res) {
	var users = await User.find();
	res.render('users/index', {
		users: users
	});
}

module.exports.search = function (req, res) {
	// Keep value search
	// res.send('<script> window.onload = function(){var inputQueryName   = document.getElementById("query-name");	inputQueryName.value = "'+req.query.q+'";}</script> ');

	console.log(req.query);

	var query       = req.query.q;
	var userMatched = db.get('users').value().filter( function (user) {
		return user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
	});

	res.render('users/index', {
		users: userMatched
	});
}

module.exports.getCreate  = function (req, res) {
	res.render('users/create');
}

module.exports.postCreate = function (req, res) {
	req.body.avatar = req.file.path.split('/').slice(1).join('/');
	req.body.id = shortid.generate();
	
	// test res.locals
	console.log(res.locals);

	db.get('users').push(req.body).write();
	res.redirect('/');
}

module.exports.getInfo = async function (req, res) {
	var idUser = (req.params.id);
	var user = await User.findOne({_id: idUser});
	res.render('users/view', {
		user: user
	});
}