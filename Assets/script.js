// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {
//password characters 
let specialChar = ["!", "#", "$", "%", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "~"];
let capLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


var characterAmount = window.prompt('How many characters would you like? Password must be at least 8 characters.');
  if (isNaN(characterAmount)) {
      alert("You must enter a valid number.");
      return false;
  } else if (parseInt(characterAmount)< 8) {
      alert("Too short. Password must be at least 8 characters long.");
    return false;
  } else if (parseInt(characterAmount) >= 128) {
      alert("Too long. Password must be less than 129 characters.");
      
    }

var special = confirm('Do you want special characters such as ! or *?');
var capital = confirm('Do you want capital letters?');
var lower = confirm('Do you want lowercase letters?');
var wantNumbers =confirm('Do you want numbers?');




 //arrays
    var wantedChar = [];
    var charTypes = [];

//conditions 
if (special){
    wantedChar = wantedChar.concat(specialChar);
    charTypes.push
} 
    


//if (capital){
    //wantedChar = wantedChar.concat(capLetters);
   // charTypes.push

//}

//if (lower){
  //  wantedChar = wantedChar.concat(lowerCase);
  //  charTypes.push
//}

//if (wantNumbers){
    //wantedChar = wantedChar.concat(numbers);
    //charTypes.push
//}

//for (var i=0; i < wantNumbers; i++){
    //charTypes.push(wantedChar[Math.floor(Math.random() * wantedChar.length)]//); 
//}

var storage = [];
for (var i = 0; i < characterAmount; i++) {
    var index = Math.floor(Math.random() * wantedChar.length);
    storage.push(wantedChar[index]);
}

//if they didnt choose any or different options like one or a couple of options
if ([special, capital, lower, wantNumbers].includes(true)) {
    alert('You must select character types.');

}


return storage.join("");
 

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
console.log(password);
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
