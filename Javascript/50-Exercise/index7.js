/* Hãy viết một hàm để tìm một số có số lần lặp lại nhiều nhất trong một dãy các số nguyên.

Input: dãy số
Output: 1 dãy số bao gồm các số có số lần lặp lại nhiều nhất

ví dụ:
Input: [1,2,3,4,1,2,2,1]
Output: [1,2]*/

function findMostFrequent(arr) {
	// Viêt hàm tại đây!
	var objCount =  arr.reduce( function(a, b) {
		if(a[b] === undefined){
			a[b] = 1;
		}else{
			a[b] = a[b] + 1;
		}
		return a;
	}, {});
	// return objCount;
	var results = [];
	for(var key in objCount){
		results.push(objCount[key]);
	}

	var maxValue = Math.max.apply(null, results);
	console.log(maxValue, objCount)
	var arrRS = [];
	for(var key in objCount){
		if(objCount[key] === maxValue) arrRS.push(objCount[key]);
	}
	return arrRS;
}

console.log(findMostFrequent([1,2,3,4,1,2,2]));