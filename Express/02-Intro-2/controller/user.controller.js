const db = require('../db')
const shortid = require('short-id');

module.exports.index = function (req, res) {
	res.render('users/index', {
		users: db.get('users').value()
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
	req.body.id = shortid.generate();
	
	// test res.locals
	console.log(res.locals);

	db.get('users').push(req.body).write();
	res.redirect('/');
}

module.exports.getInfo = function (req, res) {
	var idUser = (req.params.id);
	var userView = db.get('users').find({id: idUser}).value();
	console.log(userView)
	res.render('users/view', {
		user: userView
	});
}