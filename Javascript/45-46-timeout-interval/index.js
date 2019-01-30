/**
 * Count from 1 to 10
 * Return promise
 */


function countFrom(a, b){
	var start = a;
	return new Promise(function(resolve, reject){
		var intervalId = setInterval(function(){
			console.log(start)
			start++;
			if(start === b+1){
				clearInterval(intervalId);
				resolve();
			}
		})
	})
}
// countFrom(1, 10);
countFrom(1, 10).then(function(){
	console.log('Done');
})

