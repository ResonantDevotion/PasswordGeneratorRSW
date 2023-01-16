

// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];





// prompt can input anything
// confirm is boolean

function characterOptions() {
  let chosenChar = []

  let specialChar = confirm("Do you want to include any special characters?")
  if (specialChar == true) {
    chosenChar = chosenChar.concat(specialCharacters)
  }
  let numericChar = confirm("Do you want to include any numeric characters?")
  if (numericChar == true) {
    chosenChar = chosenChar.concat(numericCharacters)
  }
  let upperCaseChar = confirm("Do you want to include any upper cased characters?")
  if (upperCaseChar == true) {
    chosenChar = chosenChar.concat(upperCasedCharacters)
  }
  let lowerCaseChar = confirm("Do you want to include any lower cased characters?")
  if (lowerCaseChar == true) {
    chosenChar = chosenChar.concat(lowerCasedCharacters)
  }
  if (specialChar !== true && numericChar !== true && upperCaseChar !== true && lowerCaseChar !== true ) {
    alert("You must choose at least one character option!!")
    return characterOptions()
  }
  return chosenChar;
}


// IF USER CLICKS OK, THEY ARE ABLE TO PROCEED.


// Function to prompt user for password options 
function getPasswordLengthOptions() {
  let passwordLength = parseInt(prompt("Please choose length of password that is between 10-64 characters."));
  if (passwordLength < 10 || passwordLength > 64) {
    alert(" You have chosen a password that is less than 10 or more than 64. Please choose length of password that is between 10-64 characters.");
    return getPasswordLengthOptions();
  }
  else {
    return passwordLength;
  };
}

// REDO PROMPT PLENGTH


// function getPasswordCharacterOptions() {
//   {
//     while (characterOptions.specialChar == TRUE) {
//       characterOptions

//     }

//   }
// }




// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input 
function generatePassword() {

  // PUT INPUT HERE
  let pwLength = getPasswordLengthOptions();
  let choices = characterOptions();
  let password = "";

  for (let i = 0; i < pwLength; i++) {
    password += choices[Math.floor(Math.random() * choices.length)]
  }

  return password;
  // console.log(length);
  // console.log(choices);
}


// Math.floor(Math.random usually used together



///////////////DONT DO ANYTHING BELOlenW HERE ////

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Once prompts are answered then the password should be generated and displayed in an alert or written to the page