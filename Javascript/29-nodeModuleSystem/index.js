var Cat 	= require("./cat.js");
var Mouse 	= require("./mouse.js");


var tom = new Cat();
console.log(tom);
var mickey = new Mouse('black');
var jerry  = new Mouse('orange');
console.log(mickey);
console.log(jerry);
tom.eat(jerry).eat(mickey);
console.log(tom);
console.log(mickey);
console.log(jerry);
tom.digest();
console.log(tom);