const express = require('express');
const route = express.Router();

const controller = require('../controller/transfers.controller');

route.get('/create', controller.getCreate);

route.post('/create', controller.postCreate);

module.exports = route;