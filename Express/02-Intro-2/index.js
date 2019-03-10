const express  = require('express');
const bodyParser = require('body-parser');
const userRoute = require('./routes/user.route');
const cookieParser = require('cookie-parser');
const authRoute = require('./routes/auth.route');
const authMiddleware  = require('./middlewares/auth.middleware');


const port = 3000;

const app = express();
app.set('view engine', 'pug');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());

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
app.get('/', function (request, response) {
	response.render('users/index', {
		users: db.get('users').value()
	});
	console.log(request.cookies);
});

app.use('/users', authMiddleware.requireAuth, userRoute);
app.use('/auth', authRoute);

app.listen(port, function () {
	console.log('Example app listen on port ' + port);
});
