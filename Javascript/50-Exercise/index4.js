function equal_pt02(str){ 
 	var charP = 0, charT = 0;
  for(var character of str){
  	if(character == 'p') charP ++;
    if(character == 't') charT ++;
  }
  return charP === charT;
}

console.log(equal_pt02('empty touch tring'));