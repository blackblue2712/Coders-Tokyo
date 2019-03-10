var orders = [
	{name: 'A', quantity: 2, unitPrice: 100},
	{name: 'B', quantity: 1, unitPrice: 400},
	{name: 'C', quantity: 5, unitPrice: 150},
];

var totalPrice = orders.reduce((a, b) => {
	if(typeof a == "number") return a + b.quantity*b.unitPrice;
		return a.quantity*a.unitPrice + b.quantity*b.unitPrice;
})

var totalPrice2 = orders.reduce((a, b) => {
	return a + b.quantity*b.unitPrice;
}, 0)
console.log(totalPrice);
console.log(totalPrice2);

var items = ['Tom', 'Bill', 'Kim', 'Anh', 'Lien'];

var strItems = items.reduce( (a, b) => {
	return a + '<' + b + '>';
}, '<');
console.log(strItems.substr(1))



//EX
function flatten(arr) {
  var result = arr.reduce( function(sm1, sm2){
    for(var i = 0; i < sm2.length; i++){
      sm1.push(sm2[i]);
      console.log(sm1);
    }
  });
  return result;  
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];
console.log(flatten(arrays))