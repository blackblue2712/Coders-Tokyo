const Product = require('../../models/product.model');

module.exports.index = async function (req, res, next) {	
	var products = await Product.find();
	res.json(products);
};

module.exports.create = async function (req, res, next) {	
	var products = await Product.create(req.body);
	res.json(products);
};

module.exports.delete = async function (req, res, next) {
	await Product.deleteOne({_id: req.params.id}, function (err, res) {
		if(err) throw err;
	});
};

module.exports.update = async function (req, res, next) {
	await Product.update({_id: req.params.id}, {$set: {name: req.body.name} }, function (err, res) {
		if(err) throw err;
	});
};