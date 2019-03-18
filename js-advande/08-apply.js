// apply(this, [param1, param2, ...])


function greeting (name, age) {
	console.log(`Hi ${name}, I'm ${age}`);
}

greeting.call(null, 'Tom', 10); // => Tham số đầu tiên là this, các tham số sau là tham số cuả hàm nó gọi

function greeting2 () {
	console.log(`Hi ${this.name}, I'm ${this.age}`);
}

var cat = {
	name: 'Tom',
	age: 10
}

greeting2.apply(cat);

/**
 * Áp dụng apply
 */


function sum () {
	var arr_args = Array.from(arguments);
	return  arr_args.reduce( (rs, num) => {
		return rs += num;
	}, 0);
}

function average () {
	var x = sum.apply(null, arguments);
	return x/arguments.length;
}

var rs = average (1, 2, 3, 6);
console.log(rs);