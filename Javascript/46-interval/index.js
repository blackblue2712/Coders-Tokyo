/**
 * Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, trả về promise, promise này resolve sau khi đã đếm xong
 */
function countDown(x) {
  return new Promise(function(resolve, reject){
    var y = x + 1;
    var idInterval = setInterval(function(){
      y--;
      console.log(y);
      if(y === 0){
        clearTimeout(idInterval);
        resolve(1);
      }
    }, 1000);
  })
  
}

function sayHappyNewYear() {
  console.log('Happy new year');
}

countDown(5).then(sayHappyNewYear);