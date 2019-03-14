const express = require('express');

const controller = require('../controller/cart.controller');

const route = express.Router();

route.get('/add/:productId', controller.addToCart);

module.exports = route;