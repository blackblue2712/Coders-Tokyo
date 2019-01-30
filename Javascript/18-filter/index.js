var numbers = [1, 2, 3, 4];
var evennNumbers = numbers.filter((item) => {
	return item % 2 === 0;
})

console.log(evennNumbers);