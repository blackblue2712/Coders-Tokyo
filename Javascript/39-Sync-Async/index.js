var fs = require('fs');


//Sync: Đồng bộ
console.log('Start');
var song1 = fs.readFileSync('./song1.txt', {encoding: 'utf-8'});
console.log(song1);
var song2 = fs.readFileSync('./song2.txt', {encoding: 'utf-8'});
console.log(song2);
console.log('End');

//Async: Không đồng bộ
console.log('Start Async');
var song1 = fs.readFile('./song1.txt', {encoding: 'utf8'}, (err, data) => {
	if(err) throw err;
	console.log(data);
})
console.log('End Async');