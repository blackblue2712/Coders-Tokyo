// call(this, param1, param2, ...)


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

greeting2.call(cat);