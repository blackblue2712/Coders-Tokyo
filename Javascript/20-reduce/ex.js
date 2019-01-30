// Count the occurrences of each element inside an array using reduce
function countOccurrences(arr) {
  return arr.reduce(function(a, b){
  	// console.log(a.b);
  	// console.log(a, b)
    if(a[b] == undefined){
      a[b] = 1;
    }else{
      a[b] += 1;
    }
    return a;
  }, {});
}

var x = countOccurrences(['a', 'b', 'c', 'b', 'a']);
console.log(x);
// { 
//   a: 2, 
//   b: 2, 
//   c: 1 
// }
