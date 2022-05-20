//Declare global variables to be scoped in the selectChars function > generatePassword function
var passwordLength; 
var hasNumbers;
var hasSpecialCharacters;
var hasUppercase;
var hasLowercase;
var selectedChars = [];

//Arrays to select from for each character type
const numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const specialChars = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

//function to narrow down which arrays to choose from 
var selectChars = function() {
  //if (variable is stored as true)
  if (hasLowercase) {
    //then add it to the larger array of all characters
    selectedChars = lowerChars.concat(selectedChars); 
    console.log(selectedChars);
  }
  if (hasUppercase) {
    selectedChars = upperChars.concat(selectedChars);
    console.log(selectedChars);
  }
  if (hasNumbers) {
    selectedChars = numberChars.concat(selectedChars);
    console.log(selectedChars);
  }
  if (hasSpecialCharacters) {
    selectedChars = specialChars.concat(selectedChars);
    console.log(selectedChars);
  }
}
  //function to input and store the length of password
  var criteriaLength = function() {
  //ask user to input numeric value for password length
   passwordLength = window.prompt("Please select a password length between 8 - 128 characters."); 
   //f inputted value matches preset length conditions, accept and log  
   if (passwordLength >= 8 && passwordLength <= 128) {
       console.log(passwordLength);  
     }
     //if invalid response, recall function to ask again until a valid response is provided
     else {
       window.alert("Please select a valid response.")
       criteriaLength();
     }  
    
   } 

  var criteriaUppercase = function() {
    //ask user to decide if to include uppercase letters 
     hasUppercase = window.confirm(" Would you like your password to contain UPPERCASE characters?");
        console.log(hasUppercase);
   };

  
  var criteriaLowercase = function() {
    //ask user to decide if to include lowercase letters
    hasLowercase = window.confirm(" Would you like your password to contain lowercase characters?");
     console.log(hasLowercase);
};   

  var criteriaSpecialCharacters = function() {
   // ask user to decide if to include special characters  
     hasSpecialCharacters = window.confirm("Would you like your password to include special characters?");
      console.log(hasSpecialCharacters);
    };

  var criteriaNumbers = function() {
    //ask user to decide if to include Numbers
    hasNumbers = window.confirm("Would you like you password to include numbers?");
      console.log(hasNumbers);
  }; 

  var makePassword = function() {
    //declare randomPassword as a string so that the value does not come back undefined
    var randomPassword = "";
    //loop through selectedChars array (passwordLength times), each time adding a randomized value (use =+ to add on, rather than replace)
    for (var i = 0; i < passwordLength; i++) {
      randomPassword += selectedChars[Math.floor(Math.random() * selectedChars.length)];
    }
    return randomPassword; //return this to whoever called this function (generatePassword)
  }; 
   
//will eventually be the function to combine responses into random password calculation to be inputted
var generatePassword = function() {
    criteriaLength();
    criteriaUppercase();
    criteriaLowercase();
    criteriaSpecialCharacters();
    criteriaNumbers();
    selectChars ();
    return makePassword(); //return makePassword's result (randomPassword) here so that the result of our whole generatePassword function is the password we would like to have written by the writePassword function
  }  
    
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //value coming from make password return statement
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

