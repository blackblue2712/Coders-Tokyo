//function as a parameter

var coffeeMachine = {
	makingCoffee : 	(onFinish) => {
		console.log("Making coffee ...");
		onFinish();
	}
}

coffeeMachine.makingCoffee(notification);

function notification(){
	console.log("Tít tít");
}
coffeeMachine.makingCoffee( () => {
	console.log("Bíp bíp");
} );