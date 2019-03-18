
function sum () {
	// console.log(arguments); // { '0': 1, '1': 2, '2': 3, '3': 4, '4': 10 } => array-like object, có các index lầ chỉ số mảng

	// let sum = 0;
	// for (let i = 0; i < arguments.length; i++ ) {
	// 	sum += arguments[i];
	// }	
	// return sum;

	/** 
	 * Không thể sử dụng các phương thức của array, nên chuyển thành array để có thể dùng map, reduce, ...
	 */
	
	var numbers = Array.from(arguments);
	return numbers.reduce( (sum, num) => {
		return sum + num;
	},0);

}

var rs = sum(1, 2, 3, 4, 10);

console.log(rs);

