function toNextChar(str) {
	// Viết hàm toNextChar dùng để thay thế mọi ký tự trong một chuỗi thành ký tự theo sau nó trong bảng chữ cái. Ví dụ: "Hello" chuyển thành "Ifmpp"
  // Tham số:
  // - String: chuỗi nhập vào ban đầu.
  var arrStr = str.split('');
  var results = [];
  for(var i = 0; i < arrStr.length; i++){
  	results.push( String.fromCharCode( str.charCodeAt(i)+1 ) );
  }
  return results.join('');
}
  
  console.log(toNextChar('Hello'));