/**
 * co
 */


var fs = require('fs');
var co = require('co');
function readFilePromise(path){
	return new Promise(function(resolve, reject){
		fs.readFile(path, { encoding: 'utf8' }, (err, data) =>{
			if(err) reject(err);
			else resolve(data);
		})
	});
}

co(function*(){
	var song1 = yield readFilePromise('song1.txt');
	var song2 = yield readFilePromise('song2.txt');
	var song3 = yield readFilePromise('song3.txt');

	console.log(song1, song2, song3);
})

co(function*(){
	// var song1 = yield readFilePromise('song1.txt');
	// var song2 = yield readFilePromise('song2.txt');
	// var song3 = yield readFilePromise('song3.txt');
	var values = yield[
		readFilePromise('song1.txt'),
		readFilePromise('song2.txt'),
		readFilePromise('song3.txt')
	];

	return values;
}).then(function(values){
	console.log(values)
}).catch(function(error){
	console.log(error);
})


var readFiles = co.wrap(function*(files){
	// [String] -> [Promise]
	return yield files.map(function(file){
		return readFilePromise(file);
	})
});

readFiles(['song1.txt', 'song2.txt', 'song3.txt'])
	.then(function(values){
		console.log('co.wrap', values)
	});