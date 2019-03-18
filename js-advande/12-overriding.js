class MakeCoffee {
	make () {
		console.log('Making Coffee ...');
	}
}

class MakeSpecialCoffee extends MakeCoffee {
	make (callback) {
		console.log('Making Special Coffee ...');
		callback();
	}
}

newOrder = new MakeSpecialCoffee;
newOrder.make(function () {
	console.log('Bring to boss');
})