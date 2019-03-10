var express = require('express');
var app = express();
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var port = 3000;
var pug = require('pug');

var users = [
				{id: 1, name: 'Liar'},
				{id: 2, name: 'Linz'}
			];

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(request, response){
	response.render('index', {
		name: 'buddy'
	});
});

app.get('/users', function(request, response){
	console.log(request.query);
	response.render('users/users',{
		users: users
	});
});

app.get('/users/search', function(req, res){
	console.log(req.query)
	// saveTextSearch(req.query.name)
	var userMatched = users.filter(function(user){
		return user.name.toLowerCase().indexOf(req.query.q.toLowerCase()) !== -1;
	})
	res.render('users/users',{
		users: userMatched
	});
});

app.get('/users/create', function(req, res){
	res.render('users/create');
})

app.post('/users/create', function(req, res){
	console.log(req.body)
	users.push(req.body);
	res.redirect('/users');
})


app.listen(port, function(request, response){
	console.log(`Server listening on port ${port}`);
});

function saveTextSearch(value){
	var input = document.getElementById('search-content');
	input.value = value;
}