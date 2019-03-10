// array.map
var hcn = [
	{width: 10, height:  5},
	{width: 10, height:  20},
	{width: 4, height:  16}
];

var square = hcn.map( (item) => {
	return (item.width * item.height);
})

console.log(square);