function Mouse(type = 'white', weight = '0,2'){
	this.type 	= type;
	this.weight = weight;
}

Mouse.prototype.sleep = () => {
	console.log("Sleeping ...");
}
console.log(Mouse.prototype)
console.log(Mouse.prototype.constructor)
// prototype trỏ vào constructor, constructor lại trỏ về Function
// chứa prototype
// Có thể định nghĩa prototype bên ngoài để chia sẽ cho tất cả các Object
// Việc làm này làm giảm bộ nhớ hơn vì khi tạo bên trong đối tượng
// mỗi lần new sẽ tạo ra 1 function nên làm tốn bộ nhớ hơn
var mickey = new Mouse();
console.log(mickey);
console.log(mickey.sleep());
