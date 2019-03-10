const db = require('../db');
module.exports.requireAuth = function (req, res, next) {
	var userId = req.cookies.userId;
	console.log(userId);

	if(!userId) {
		res.redirect('/auth/login');
		return;
	}

	if(!db.get('users').find({id: userId}).value()){
		res.redirect('/auth/login');
		return;
	}

	next();
}
