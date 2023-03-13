
var numbers = '0123456789'
var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'
var uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var specialCharacters = '!`~@#$%^&*()-_=+[{]};:",<./ ? |';
var possibleCharacters = [];
var finalPassword = [];

function generatePassword() {


  numberOfCharacters = prompt("How many characters do you want in your password? Please choose a number between 8 and 128.");
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    alert("Please choose a number between 8 and 128.");
    generatePassword();
  }

  let lowercase = confirm('Do you want lowercase letters?');
  if (!lowercase) alert("Your password will NOT include lowercase letters."); {
  }

  let uppercase = confirm('Do you want uppercase letters?');
  if (!uppercase) alert('Your password will NOT include uppercase letters.'); {
  }

  let special = confirm('Do you want to include special characters?');
  if (!special) alert('Your password will NOT include special characters.'); {
  }

  let includeNumbers = confirm('Do you want to include numbers?')
  if (!includeNumbers) alert('Your password will NOT include numbers.'); {
  }

  if (includeNumbers === false && lowercase === false && uppercase === false && special === false) {
    alert("You must choose at lease one.")
    generatePassword()
  }

  if (includeNumbers) {

    possibleCharacters.push(...numbers);
  }
  console.log(possibleCharacters, "possible characters line 39");
  if (lowercase) {
    possibleCharacters.push(...lowercaseLetters)

  }
  if (uppercase) {
    possibleCharacters.push(...uppercaseLetters)

  }
  if (special) {
    possibleCharacters.push(...specialCharacters)

  }


  for (let i = 0; i < numberOfCharacters; i++) {
    finalPassword.push(possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)])

  }
  return finalPassword;
}

var generateBtn = document.querySelector("#generate");
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password.join('');
}
generateBtn.addEventListener("click", writePassword)