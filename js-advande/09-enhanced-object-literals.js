
// Constructor function
function Mouse (name) {	
	console.log(`Hi, ${name}`);
}

Mouse.prototype.run = function () {
	console.log('running ... ');
}

var mickey = new Mouse('mickey');
mickey.run();


// object literals
var Tom = {
	name: 'Tom',
	age: 10,
	run: function () {
		console.log('Tom running ...')
	} 
}

// Enhanced object literals

const name = "Mio";
var GF = { 
	name,
	come() {
		console.log(`${this.name} comminggg !!`);
	}
}

GF.come();

