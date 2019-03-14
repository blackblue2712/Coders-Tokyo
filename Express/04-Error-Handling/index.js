/*function add (a, b) {
	if (typeof a == 'string' || typeof b == 'string') {
		throw new Error('Wrong type');
	}
	return a + b;
}

try {
	add('a', 1)	;
}catch (err) {
	console.error(err);
}

console.log('XXX');*/

function reject () {
	return new Promise(function(resolve, reject){
		reject('Promise error');
	});
}

reject().catch( function (err) {
	console.log(err);
});


/**
 * next trong express: next() -> chuyển qua middleware tiếp theo
 * next(error) -> through error
 */