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

// Function to prompt user for password options
function getPasswordOptions () {  
  const passwordLength = parseInt(prompt("How many characters would you like in your password?"));  
  // console.log(passwordLength);
  // console.log(typeof passwordLength);

  if (passwordLength >= 10 || passwordLength <= 64) {
    alert("Valid Password");  
  } else { 
    alert("Invalid Password");
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

  // if condition to validate the USER INPUT

  // if condition to validate the USER INPUT
  //return passwordOptions;
    return console.log(passwordOptions);
}

getPasswordOptions();


// function to get a random element from an array
// function getRandom(arr) {
//   return Math.floor((Math.random() * arr.length - 1));
// }
// // Function to generate password with user input
// function generatePassword() {
//   // empty dataset variable to act as a PLACEHOLDER
//   var options = [
//     passwordLength = parseInt(prompt("How many characters would you like in your password?")),
//     upper,
//     lower,
//     numeric,
//     special
//   ]
//   getPasswordOptions();
//   // var options = getPasswordOptions();
//   var randomPassword = [];  
//   var availableCharacters = [];}

  // if (options.lower === true) 
  // if (options === true) {
  //   for (let i = 0; i < options.passwordLength; i++) {
  //   //  var randIndex = getRandom(lowerCasedCharacters && upperCasedCharacters && numericCharacters && specialCharacters);
  //    var randIndex = getRandom();
  //     var randChar = availableCharacters[randIndex];
  //     availableCharacters.push(randChar);
  //   } 
  // }
  
  // repeat above code 3 more times for other sets or arrays for upper, numeric and special

// function to get a random element from specialCharacters array

// passwordLength = parseInt(prompt("How many characters would you like in your password?"));
// upper = confirm("Would you like to use UPPERCASE characters in your password?");
// lower = confirm("Would you like to use LOWERCASE characters in your password?");
// upper = confirm("Would you like to use UPPERCASE characters in your password?");
// numeric = confirm("Would you like to use NUMERIC characters in your password?");
// special = confirm("Would you like to use special characters in your password?");
// getRandom(specialCharacters);
// var options = {
//   passwordLength,
//   upper,
//   lower,
//   numeric,
//   special
// }
// options = {
//   passwordLength,
//   upper,
//   lower,
//   numeric,
//   special
// };

// Function to generate password with user input
generatePassword(specialCharacters);
if (options[4] === true) {
  for (let i = 0; i < options.passwordLength; i++) {
   var randIndex = getRandom(specialCharacters)
    var randChar = specialCharacters[randIndex];
    specialCharacters.push(randChar)
  }
}

// passwordLength = parseInt(prompt("How many characters would you like in your password?"));
// upper = confirm("Would you like to use UPPERCASE characters in your password?");
// lower = confirm("Would you like to use LOWERCASE characters in your password?");
// upper = confirm("Would you like to use UPPERCASE characters in your password?");
// numeric = confirm("Would you like to use NUMERIC characters in your password?");
// special = confirm("Would you like to use special characters in your password?");
// var options = {
//   passwordLength,
//   upper,
//   lower,
//   numeric,
//   special
// }
// // function to get a random element from numericCharacters array
// getRandom(numericCharacters);
// // Function to generate password with user input
// generatePassword(numericCharacters);
// if (options[3] === true) {
//   for (let i = 0; i < options.passwordLength; i++) {
//    var randIndex = getRandom(numericCharacters)
//     var randChar = numericCharacters[randIndex];
//     numericCharacters.push(randChar)
//   }
// }


// // function to get a random element from lowerCasedCharacters array
// getRandom(lowerCasedCharacters);
// // Function to generate password with user input
// generatePassword(lowerCasedCharacters);

//   if (options[2] === true) {
//     for (let i = 0; i < options.passwordLength; i++) {
//      var randIndex = getRandom(lowerCasedCharacters)
//       var randChar = lowerCasedCharacters[randIndex];
//       lowerCasedCharacters.push(randChar)
//     }
  // }


  // function to get a random element from upperCasedCharacters array
// getRandom(upperCasedCharacters); 
// generatePassword(upperCasedCharacters);

//   if (options[1] === true) {
//     for (let i = 0; i < options.passwordLength; i++) {
//      var randIndex = getRandom(upperCasedCharacters)
//       var randChar = upperCasedCharacters[randIndex];
//       upperCasedCharacters.push(randChar)
//     }
//   }

//     for (let i = 0; i < options.passwordLength; i++) {
//      var randIndex = getRandom(availableCharacters);
//       var randChar = availableCharacters[randIndex];
//       randomPassword.push(randChar);

//       // return randomPassword.join("");
//     }
      

//   // return randomPassword.join("");

//   document.getElementById("password").textContent = randomPassword.join("");


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


