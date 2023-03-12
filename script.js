// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// // function writePassword() {
// //   var password = generatePassword();
// //   var passwordText = document.querySelector("#password");

// //   passwordText.value = password;

// }
function generatePassword() {
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var specialCharacters = ['!', '`', '~', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', '}', ';', ':', '"', ',', '<', '.', '>', '/', '?', '|'];
  var possibleCharacters = [];
}
numberOfCharacters = prompt("How many characters do you want in your password? Please choose a number between 8 and 128.");
if (numberOfCharacters < 8 || numberOfCharacters > 128) {
  return "Please choose a number between 8 and 128."
} else {
  alert("Your password will be " + numberOfCharacters + " characters long.");
}
lowercase = confirm('Do you want lowercase letters?');
   if(true) text = "Your password will include lowercase letters"; {
    };


