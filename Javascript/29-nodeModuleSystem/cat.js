function Cat(){
	this.stomach = [];
};
Cat.prototype.eat = function(mouse) {
	this.stomach.push(mouse);
	mouse.die();
	return this;
};
Cat.prototype.digest = function() {
	this.stomach.shift();
	return this;
};

module.exports = Cat;