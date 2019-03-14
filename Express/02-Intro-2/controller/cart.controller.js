const db = require('../db');

module.exports.addToCart = function (req, res, next) {
	var productId = req.params.productId;
	var sessionId = req.signedCookies.sessionId;

	if(!sessionId) {
		res.redirect('/products');
		return;
	}
	
	/**
	 * tìm session có cùng id
	 * lấy ra property cart
	 * Nếu không có thì set = 0
	 */
	var count = db.get('sessions')
				  .find( {id: sessionId})
				  .get('cart.' + productId, 0)
				  .value();

	db.get('sessions')
	  .find( {id: sessionId} )
	  .set('cart.' + productId, count + 1)
	  .write();

	  res.redirect('/product/index');
}