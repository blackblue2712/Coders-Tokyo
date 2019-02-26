// Count the occurrences of each element inside an array using reduce
function countOccurrences(arr) {
  return arr.reduce(function(a, b){
  	// console.log(a.b);
  	// console.log(a, b)
    if(a[b] == undefined){
      a[b] = 1;
    }else{
      a[b] += 1;
    }
    return a;
  }, {});
}

var x = countOccurrences(['a', 'b', 'c', 'b', 'a']);
console.log(x);
// { 
//   a: 2, 
//   b: 2, 
//   c: 1 
// }
// 

// Turn an array of voter objects into a count of how many people voted
// function totalVotes(arr) {
//     return arr.reduce( (a, b) =>{
//       // if(b.voted === true){
//       //   a += 1;
//       // }
//       // return a;
//       return a + b.voted;
//     }, 0);
// }

// var voters = [
//   {name:'Bob' , age: 30, voted: true},
//   {name:'Jake' , age: 32, voted: true},
//   {name:'Kate' , age: 25, voted: false},
//   {name:'Sam' , age: 20, voted: false},
//   {name:'Phil' , age: 21, voted: true},
//   {name:'Ed' , age:55, voted:true},
//   {name:'Tami' , age: 54, voted:true},
//   {name: 'Mary', age: 31, voted: false},
//   {name: 'Becky', age: 43, voted: false},
//   {name: 'Joey', age: 41, voted: true},
//   {name: 'Jeff', age: 30, voted: true},
//   {name: 'Zack', age: 19, voted: false}
// ];
// totalVotes(voters) // 7
