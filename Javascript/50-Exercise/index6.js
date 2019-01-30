function maxOfSumChain(arr,k){
	var results = [];
	for(var i = 0; i < arr.length - k + 1; i++) {
	  	var s = 0;
	  	for(var j = i; j < i+k; j++) {
	      s += arr[j];
	    }
	    results.push(s);
  	}
  	return Math.max.apply(null, results);
}

console.log(maxOfSumChain([1,3,2],2));
console.log(maxOfSumChain([1,3,2,6,2],3))