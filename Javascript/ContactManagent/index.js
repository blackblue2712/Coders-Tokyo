/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */
var fs = require('fs');
var readlineSync = require('readline-sync');
var contacts = [];
function readFileData(){
  var result =  fs.readFileSync('./data.json', {encoding: 'utf-8'});
  contacts = JSON.parse(result);
}

function showMenu(){
  console.log('1. Add a new contact');
  console.log('2. Edit a contact');
  console.log('3. Delete a contact');
  console.log('4. Find a contact');
  console.log('5. Show all contact');
  console.log('6. Save and exit');
  var option = readlineSync.question('> ');
  switch(option){
    case '1':
      addContact();
      showMenu();
      break;
    case '2':
      editContact();
      showMenu();
      break;
    case '3':
      deleteContact();
      showMenu();
      break;
    case '4':
      findContact();
      showMenu();
      break;
    case '5':
      showContact();
      showMenu();
      break;
    case '6':
      saveAndExit();
      break;
    default:
      console.log('Wrong option!, please try again');
      showMenu();
      break;
  }
}

function showContact(){
  var c = 1;
  console.log('===================<<===================');
  for(var i in contacts){
    console.log( c + '.' , contacts[i].name, contacts[i].phone);
    c++;
  }
  console.log('===================>>===================');
}
function addContact(){
  var name  = readlineSync.question('Name: ');
  var phone = readlineSync.question('Phone number: ');
  contacts.push({name: name, phone: phone});
  showContact();
}
function editContact(){
  var contactIndex = readlineSync.question('Which contact do you want to edit?');
  if(contactIndex > contacts.length || contactIndex < 1){
    console.log('Wrong!');
    showMenu();
  }else{
    var name = readlineSync.question('Name: ');
    var phone = readlineSync.question('Number phone: ');
    contacts[contactIndex-1].name = name;
    contacts[contactIndex-1].phone = phone;
  }
}
function deleteContact(){
  var contactIndex = readlineSync.question('Which contact do you want to delete?');
  var check = readlineSync.question('Are you sure?(y/n) ');
  if(check === 'Y' || check === 'y'){
    delete contacts[contactIndex-1];
    for( i = contactIndex-1; i < contacts.length -1; i++){
      contacts[i] = contacts[i+1];
    }
    contacts.length = contacts.length - 1;
  }
}
function findContact(){
  var c = 1;
  var contentFind = readlineSync.question('Enter about what you want to find: ');
  if( parseInt(contentFind) >= 0 === false ){
    contentFind = contentFind.toLowerCase();
    var results = contacts.filter(function(contact){
      return change_alias(contact.name.toLowerCase()) === change_alias(contentFind);
    });
  }else{
    var lengthFind = contentFind.length;
    console.log(lengthFind)
    var results = contacts.filter(function(contact){
      return contact.phone.substr(0, lengthFind) == contentFind ;
    })
  }
  
  console.log('===================>>===================');
  for(i in results){
    console.log( c + '.', results[i].name, results[i].phone);
    c ++;
  }
  console.log('===================>>===================');
}
function saveAndExit(){
  var content = JSON.stringify(contacts);
  fs.writeFileSync('./data.json', content);
}
function change_alias(alias) {
    var str = alias;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    str = str.replace(/đ/g,"d");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
    str = str.replace(/ + /g," ");
    str = str.trim(); 
    return str;
}
function main(){
  readFileData();
  showContact();
  showMenu();
}
main();