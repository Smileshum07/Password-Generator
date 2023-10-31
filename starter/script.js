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

// Function to prompt user for password options

function getPasswordLength() {
  var length = parseInt(prompt('Please choose length of your password:'));
  if (length < 8 && length > 128) {
    length = parseInt(prompt('Your password length must be from 8 to 128 characters'));
  };
  return length;
};

function getPasswordOptions() {

  var passwordLength = getPasswordLength();
  var lowerCase = confirm('Would you like to use the Lowercase?');
  var upperCase = confirm('Would you like to use the Uppercase?');
  var numbers = confirm('Would you like to use Numbers?');
  var specialCharacters = confirm('Would you like to use special characters?');

  return {
    passwordLength,
    lowerCase,
    upperCase,
    numbers,
    specialCharacters
  }
};

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random(arr)*arr.length)];
};

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  console.log(options);

  var possible = [];

  if (options.lowerCase) {
     possible = possible.concat(lowerCasedCharacters);
  };
  if (options.upperCase) {
     possible = possible.concat(upperCasedCharacters);
  };
  if (options.numbers) {
    possible = possible.concat(numericCharacters);
  };

  if (options.specialCharacters) {
    possible = possible.concat(specialCharacters);
  };
  

  for (i = 0; i < options.passwordLength; i++) {
    var randomPassword = getRandom(possible);
    

  };
   
    return randomPassword;
   
  };
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);



