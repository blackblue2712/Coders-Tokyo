
var mouse  = {
	name: "Mickey",
	sayHi: function () {
		console.log("Hello my name is", this.name);
	}
};

mouse.sayHi(); 					// Hello my name is Mickey
var cloneMouse = mouse.sayHi;	// 
cloneMouse();					// Hello my name is undefined

var bindMouse = mouse.sayHi.bind(mouse);
bindMouse(); 					// Hello my name is Mickey