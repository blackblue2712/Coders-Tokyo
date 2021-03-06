// console.log(process.env)
require('dotenv').config();
const express  = require('express');
const csrf = require('csurf')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoute = require('./routes/user.route');
const cookieParser = require('cookie-parser');
const authRoute = require('./routes/auth.route');
const authMiddleware  = require('./middlewares/auth.middleware');
const productRoute = require('./routes/product.route');
const sessionMiddleware = require('./middlewares/session.middleware');
const cartRoute = require('./routes/cart.route');
const transfersRoute = require('./routes/transfers.route');
const productAPIRoute = require('./api/routes/product.route'); 

const port = 3000;

const app = express();
app.set('view engine', 'pug');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SECRET_SESSION));
app.use(sessionMiddleware);
// app.use(csrf({ cookie: true }));
// 
mongoose.connect(process.env.MONGO_URL);
const db = require('./db');


/*app.get('/', function (request, response) {
	response.send('<h1>Hello Coders.Tokyo</h1>');
});*/

// Static file - Express looks up the files relative to the static directory, so the name of the static directory is not part of the URL.
app.use(express.static('public'))

/*var users = 
[
	{id: 1, name: 'Linz'},
	{id: 2, name: 'Liar'},
	{id: 2, name: 'Blue'}
];*/


// Using template engines
// app.get('/', async function (req, res) {
// 	var users = await User.find();
// 	res.render('users/index', {
// 		users: users
// 	});
// });

app.use('/users', authMiddleware.requireAuth, userRoute);
app.use('/auth', authRoute);
app.use('/product', productRoute);
app.use('/cart', cartRoute);
app.use('/transfers', authMiddleware.requireAuth, csrf({ cookie: true }), transfersRoute);
app.use('/api/product', productAPIRoute);

app.listen(port, function () {
	console.log('Example app listen on port ' + port);
});
