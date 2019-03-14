const db = require('../db');
const shortId = require('short-id');

module.exports.getCreate = function (req, res, next) {
	res.render('transfers/create', {
		csrfToken: req.csrfToken() 
	});
}

module.exports.postCreate = function (req, res, next) {

	var data = {
		id: shortId.generate(),
		accounnt: req.body.account,
		money: parseInt(req.body.money),
		userId: req.signedCookies.userId
	}

	db.get('transfers').push(data).write();
	res.redirect('/transfers/create');
}