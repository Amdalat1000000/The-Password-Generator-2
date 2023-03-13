// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
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
var passwordLength;
// Function to prompt user for password options
function getPasswordOptions () {  
  passwordLength = parseInt(prompt("How many characters would you like in your password?"));  
  console.log(passwordLength);
  // console.log(typeof passwordLength);

  if (passwordLength <= 10 || passwordLength >= 64) {
    alert("Invalid Password");
    return getPasswordOptions();  
  } else { 
    alert("Valid Password");
  } 

  // variables to gather lower and uppercase options from the USER
  var lower = confirm("Would you like to use LOWERCASE characters in your password?");
  // console.log(lower);
  var upper = confirm("Would you like to use UPPERCASE characters in your password?");
  // console.log(lower, upper);

  // variable to get numeric option from the USER
  var numeric = confirm("Would you like to use NUMERIC characters in your password?");
  console.log(numeric);

  // variable to get special character option from the USER
  var special = confirm("Would you like to use special characters in your password?");
  console.log(special);

  // if condition to validate the USER INPUT

  if(lower === false && upper === false && numeric === false && special === false) {
    alert("YOU must choose at least one character type");
    return;
  } else {
    console.log("Continue with code ...");
  }

  var passwordOptions = {
    passwordLength: passwordLength,
    lower: lower,
    upper: upper,
    special: special,
    numeric: numeric,  
  };
  //if user selected certain criteria then we add the array
  var master = [];
  if(lower){
    //then we add lower case letters
    master = master.concat(lowerCasedCharacters);
  }
  if(upper){
    master = master.concat(upperCasedCharacters);
  }
  if(numeric){
    master = master.concat(numericCharacters);
  }
  if(special){
    master = master.concat(specialCharacters);
  }

  // if condition to validate the USER INPUT
  //return passwordOptions;
    return master;
}

getPasswordOptions();


// Function to generate password with user input
function generatePassword(){
  var specialCharacters = getPasswordOptions()
  console.log(specialCharacters)
  var password = "";
  //make a loop that executes passwordLength times;
  for (let i = 0; i < passwordLength; i++) {
    //adding to password a random character
    // var randIndex = Math.floor(Math.random() * arr.length);
    var randIndex = Math.floor(Math.random() * passwordLength);
    // var randChar = passwordLength[randIndex];
    var randChar = specialCharacters[randIndex];
    password+= randChar
   }
   return password;
}

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


