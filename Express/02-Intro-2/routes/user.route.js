const express = require('express');
var multer  = require('multer');

const controller = require('../controller/user.controller');
const validate = require('../validate/user.validate');

const router = express.Router();

var upload = multer({ dest: './public/uploads/' });



/*app.get('/', function (request, response) {
	response.render('users/index', {
		users: users
	});
});*/

router.get('/', controller.index);

router.get('/search', controller.search);

router.get('/create', controller.getCreate);

router.get('/cookie', function (req, res, next) {
	res.cookie('user-id', 12345);
	res.send('Hello');
})

// POST

/*router.post('/create', function (req, res) {
	console.log(req.body);
	users.push(req.body);

	res.redirect('/');
});*/

router.post('/create', upload.single('avatar'), validate.postCreate, controller.postCreate);

// Route parameters
router.get('/:id', controller.getInfo);


module.exports = router;