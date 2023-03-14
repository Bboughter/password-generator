//declared variables globally
var numbers = '0123456789';
var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var specialCharacters = '!`~@#$%^&*()-=+[{]};:",<./?|';
var possibleCharacters = [];
var finalPassword = [];
//function to generate the new password
function generatePassword() {

//prompt for the user to enter how many characters they want in their password. 
//alert added if the user doesn't choose a number meeting the criteria
//starts the function over again if criteria not met
  numberOfCharacters = prompt("How many characters do you want in your password? Please choose a number between 8 and 128.");
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    alert("Please choose a number between 8 and 128.");
    generatePassword();
  }
//asking the user if they want to include lowercase letters, uppercase letters, numbers, and special characters.
//user alerted if they didn't want to include one of the variables 
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
//alerts the user if they didn't choose lowercase letters, uppercase letters, numbers or special characters that they need to choose at least one
//function started over if criteria not met
  if (includeNumbers === false && lowercase === false && uppercase === false && special === false) {
    alert("You must choose at lease one.")
    generatePassword()
  }
//if the user chose to include numbers, lowercase letters, uppercase letters, or special characters, options were taken from the original 
//variable and added to a new variable in an array
  if (includeNumbers) {
    possibleCharacters.push(...numbers);
  }
  
  if (lowercase) {
    possibleCharacters.push(...lowercaseLetters)

  }
  if (uppercase) {
    possibleCharacters.push(...uppercaseLetters)

  }
  if (special) {
    possibleCharacters.push(...specialCharacters)

  }

//for loop for to run through the possible characters with a math equation to randomize the final output
  for (let i = 0; i < numberOfCharacters; i++) {
    finalPassword.push(possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)])

  }
  return finalPassword;
}
/**code provided initially */
//the code grabs the generate id element from the HTML and is assigned to the generateBtn variable
//the code also grabs the password id element from the HTML during the writePassword function which assigns the password to a new variable so it will 
//display the text of the new password
//the join method is used to combine the strings so the commas do not appear between each character
var generateBtn = document.querySelector("#generate");
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password.join('');
}
//the event listener is listening for the user to click on the generate password button the began
generateBtn.addEventListener("click", writePassword)