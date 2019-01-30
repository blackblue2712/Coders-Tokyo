var employees = [
	{name: 'John', age: 20},
	{name: 'Zuck', age: 18},
	{name: 'Maria', age: 19}
];

var ascEmployees = employees.sort( (a, b) => {
	return a.age - b.age;
})
console.log(ascEmployees)
var descEmployees = employees.sort( (a, b) => {
	return b.age - a.age;
})
console.log(descEmployees)