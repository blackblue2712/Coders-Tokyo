// values type: number string ...
// references: object, array, function

let a = 1;
let b = 1;
console.log(a === b); // => true

let obj1 = {a: 1};
let obj2 = {a: 1};
console.log(obj1 === obj2); // => false

/**
 * Bên trong hàm thay đổi giá trị của values type bên ngoài vẫn không thay đổi
 * Thay đổi thuộc tính của biến kiểu references (object) thì bên ngoài hàm object đó vẫn bị thay đổi
 */