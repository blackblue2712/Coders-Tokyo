var express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const controller = require('../controller/user.controller');




/*app.get('/', function (request, response) {
	response.render('users/index', {
		users: users
	});
});*/

router.get('/', controller.index);

router.get('/search', controller.search);

router.get('/create', controller.getCreate);

// POST

/*router.post('/create', function (req, res) {
	console.log(req.body);
	users.push(req.body);

	res.redirect('/');
});*/

router.post('/create', controller.postCreate);

// Route parameters
router.get('/:id', controller.getInfo);


module.exports = router;