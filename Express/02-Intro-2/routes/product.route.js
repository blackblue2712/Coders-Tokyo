const express = require('express');
const controller = require('../controller/product.controller');

const route = express.Router();

route.get('/index', controller.getProducts);
route.get('/', controller.getProducts);

module.exports = route;

