// Viết hàm để viết hoa chữ cái đầu của từng từ trong câu
function capitalize(str) {
	// var strLower =  str.toLowerCase();
	// return strLower.replace(/\b[A-Za-z]/g, function(letter){
	// 	console.log(letter);
 //  		return letter.toUpperCase();
 //  	});

  	var arrStr = str.toLowerCase().split('');
  	arrStr[0] = arrStr[0].toUpperCase();
  	for(var x = 1; x < arrStr.length; x++){
  		if(arrStr[x] == ' ' && arrStr[x+1] != ' '){
  			arrStr[x+1] = arrStr[x+1].toUpperCase();
  		}
  	}
  	return arrStr.join('');
}

console.log( capitalize('XIN CHÀO MÀY') );
