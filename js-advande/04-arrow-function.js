
var a = {
	name: "AAA",
	run : function () {
		console.log(this.name)
	}
}

a.run()	; // => "AAA"

/**
 * 
 */

var a = {
	name: "AAA",
	run : function () {
		var run2  = function () {
			console.log(this.name);
		}
		run2();
	}
}

a.run()	; // => "undefined" vì this lúc này có là global context (run2 chỉ là phươgg thức không có thuộc tính)

/**
 * 
 */

var a = {
	name: "AAA",
	run : function () {
		var that = this;
		var run2  = function () {
			console.log(that.name);
		}
		run2();
	}
}

a.run(); // => "AAA"

/**
 * 
 */

var a = {
	name: "AAA",
	run : function () {
		var run2  = function () {
			console.log(this.name);
		}
		run2.bind(a)();
	}
}
// same
var a = {
	name: "AAA",
	run : function () {
		var run2  = function () {
			console.log(this.name);
		}.bind(a);
		run2();
	}
}

a.run(); // => "AAA"

/**
 * ARROW FUNCTION
 */

var a = {
	name: "AAA",
	run : function () {
		var run2  = () => {
			console.log(this.name);
		}
		run2();
	}
}

a.run(); // => "AAA" vì arrow function không có context nên không dùng this, lúc này this sẽ là context của hàm gần nhất mà nó mằm trong

/**
 * 
 */

var a = {
	foo: 'bar',
	run:  function () {
		setTimeout(function () {
			console.log(this.foo);
		}, 2000);
	}
}

a.run(); // => undefined vì  this lúc này là context của function setTimeout
