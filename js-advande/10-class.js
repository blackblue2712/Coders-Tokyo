
// Constructor function
/*function Mouse (name) {	
	console.log(`Hi, ${name}`);
}

Mouse.prototype.run = function () {
	console.log('running ... ');
}*/

class Mouse {
	constructor (name) {	
		console.log(`Hi, ${name}`);		
	}

	run () {
		console.log('running ... ');		
	}
}

const mouse  = new Mouse ('Mickey');

mouse.run();