var sum = (a, b) => {
	return a + b;
}

console.log( sum(2, 3) );

var square = x => x*x;  // Return 1 dòng, chỉ có 1 biến tham số
console.log( square(3) )

var arr = [1, 2, 3];
var arr_square = arr.map( x => x*x );
console.log(arr_square)