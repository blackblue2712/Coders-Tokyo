// Promise fs module
// var fs = require('promise-fs');

// function onDone(song){
// 	console.log(song);
// }
// function onError(err){
// 	console.log(err)
// }
// function readFilePromise(path){
// 	return fs.readFile(path, { encoding: 'utf8' });
// }

// readFilePromise('song1.txt')
//   .then( onDone )
//   .then ( function(){
//   	return readFilePromise('song2.txt')
//   })
//   .then( onDone )
//   .catch( onError )


var fs = require('fs');

function readFilePromise(path){
	return new Promise(function(resolve, reject){
		fs.readFile(path, { encoding: 'utf8' }, (err, data) =>{
			if(err) reject(err);
			else resolve(data);
		})
	});
}

readFilePromise('song1.txt')
	.then( function(song1){
		console.log(song1);
	})
	.catch( function(err){
		console.log(err);
	})

console.log('---------------------------');

//Chạy then khi tất cả đã resolve và báo lỗi khi 1 trong các hàm lỗi
Promise.all([
	readFilePromise('song1.txt'),
	readFilePromise('song1.txt')
]).then(function(results){
	console.log(results);
}).catch(function(error){
	console.log(error);
});


