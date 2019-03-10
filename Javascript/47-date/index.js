var moment = require('moment');

// var now = new Date();
// var myBirthday = new Date('1998-11-27');

// console.log(now.getTime())
// console.log(myBirthday.getTime())

var now = moment('2018-01-22 14:00');

console.log(now.fromNow())
console.log(now.format('YYYY/MM/DD'))