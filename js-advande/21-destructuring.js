// const arr = [3, 4, 5, 6] ;

// const [a, b] = arr;	// 3 4 
// const [a, b, c, d] = arr;	// 3 4 5 6
// const [a, , , b] = arr;	// 3 6
// const [a, ...b] = arr;	// 3 [4, 5, 6]

// console.log(a, b); 


const obj = {
	a: 10,
	b: 20,
	c: 30
}

var { a: x, b: y, c: z } = obj;
console.log(x, y, z); // 10 20 30

var {a, b, c} = obj; 
console.log(a, b, c); //  10 20 30

var {x, y, z} = obj; 
console.log(x, y, z); //  undefined undefined undefined

var {a, ...b} = obj;
console.log(a, b); // 10 { b: 20, c: 30 }