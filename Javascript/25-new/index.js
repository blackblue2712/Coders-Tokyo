function Mouse(name = 'Jerry'){
	this.name = name;
}
function Cat(name = 'Tom'){
	this.name = name;
	this.stomach = [];
	this.eat = function eat(mouse){
		this.stomach.push(mouse);
		return this;
	}
	this.digest = () => {
		this.stomach.shift();
		return this;
	}
}

var tom = new Cat();
console.log(tom);

var mouse1 = new Mouse();
var mouse2 = new Mouse('Cherry');

tom.eat(mouse1).eat(mouse2);
console.log(tom)

tom.digest().digest();
console.log(tom);