// const  db = require('../db');
const Product = require('../models/product.model');

module.exports.getProducts = async function (req, res, next) {
	// var page      = parseInt(req.query.page) || 1;
	// const perPage = 8;

	// var start = (page - 1) * perPage;
	// var end   = page * perPage;
	// res.render('product/index', {
	// 	products: db.get('products').value().slice(start, end)
	// });
	var products = await Product.find();
	res.render('product/index', {
		products: products
	});
}