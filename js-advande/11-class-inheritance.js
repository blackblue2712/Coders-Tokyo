// class Animal {
// 	constructor (name) {
// 		this.name = name
// 	}
// 	eat () {
// 		console.log('eating ...');
// 	}
// }

// class Bird extends Animal {
// 	fly () {
// 		console.log('flying ... ');
// 	}
// }

// const chimse = new Bird ();
// chimse.fly();


function Animal (name) {
	this.name = name
}

Animal.prototype.eat = function () {
	console.log(`${this.name} eating ...`);
}

function Bird (name) {
	Animal.apply(this, arguments);
}

Bird.prototype = new Animal; 

const chimse = new Bird('chimse');
chimse.eat();
console.log(chimse.name);