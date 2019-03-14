const express = require('express');
const controller = require('../controllers/product.controller');
const route = express.Router();

route.get('/', controller.index);
route.post('/', controller.create);
route.delete('/:id', controller.delete);
route.patch('/:id', controller.update);

module.exports = route;