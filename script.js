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
  alert ("Please choose a number between 8 and 128.")
} else {
  alert("Your password will be " + numberOfCharacters + " characters long.");
}

lowercase = confirm('Do you want lowercase letters?');
if (!lowercase) alert("Your password will NOT include lowercase letters."); {
} 

uppercase = confirm('Do you want uppercase letters?');
if (!uppercase) alert = 'Your password will NOT include uppercase letters.'; {
}

special = confirm('Do you want to include special characters?');
if (!special) alert = 'Your password will NOT include special characters.'; {
}

includeNumbers = confirm('Do you want to include numbers?')
if (!includeNumbers) alert = 'Your password will NOT include numbers.'; {
}



