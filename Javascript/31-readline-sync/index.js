var readlineSync = require('readline-sync');

// var name = readlineSync.question('May i have your name?');
// console.log('Hi!, ' + name);

var pet = {};

var name 	= readlineSync.question('Your pet name: ');
var gender 	= readlineSync.question('Pet gender (Male/Female): ');
var age 	= readlineSync.question('Pet age: ');

pet.name = name;
pet.gender = gender;
pet.age = parseInt(age);


console.log(pet);

