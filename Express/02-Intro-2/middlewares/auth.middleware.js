const db = require('../db');
module.exports.requireAuth = function (req, res, next) {
	// var userId = req.cookies.userId;
	// Using Cookie Signed
	var userId = req.signedCookies.userId;
	console.log(userId);

	if(!userId) {
		res.redirect('/auth/login');
		return;
	}

	var user = db.get('users').find({id: userId}).value();
	if(!user){
		res.redirect('/auth/login');
		return;
	}
	res.locals.user = user;
	next();
}
