const obj1 = {
	a: 1,
	b: 5,
	c: 10,
	d: {e: 100}
};

// let obj2 = {};

let obj2 = { ...obj1, z: 1000};
obj2.d.e = 1;

console.log( {obj1, obj2} ); // => e của cả 2 đều thành 1 => shollow cloning

/** 
 * Dùng recursive để deep cloning
 */