var passwordLength; 
var hasNumbers;
var hasSpecialCharacters;
var hasUppercase;
var hasLowercase;

var numberChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChars = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

var selectedChars;
if (hasLowercase) {
  selectedChars = lowerChars.concat(selectedChars);
}
if (hasUppercase) {
  selectedChars = upperChars.concat(selectedChars);
}
if (hasNumbers) {
  selectedChars = numberChars.concat(selectedChars);
}
if (hasSpecialCharacters) {
  selectedChars = specialChars.concat(selectedChars);
}





  var criteriaLength = function() {
  //ask user to input numeric value for password length
   passwordLength = window.prompt("Please select a password length between 8 - 128 characters."); 
     if (passwordLength >= 8 && passwordLength <= 128) {
       console.log(passwordLength);  
     }
     else {
       window.alert("Please select a valid response.")
       criteriaLength();
     }  
     return(passwordLength); 
   } 

 //ask user to decide if to include uppercase letters 
  var criteriaUppercase = function() {
     hasUppercase = window.confirm(" Would you like your password to contain UPPERCASE characters?");
        console.log(hasUppercase);

        return(hasUppercase);

   };

 //ask user to decide if to include lowercase letters 
  var criteriaLowercase = function() {
    hasLowercase = window.confirm(" Would you like your password to contain lowercase characters?");
     console.log(hasLowercase);

     return(hasLowercase);
};   

  var criteriaSpecialCharacters = function() {
   // ask user to decide if to include special characters  
     hasSpecialCharacters = window.confirm("Would you like your password to include special characters?");
      console.log(hasSpecialCharacters);

      return(hasSpecialCharacters);
    };

  var criteriaNumbers = function() {
    //ask user to decide if to include Numbers
    hasNumbers = window.confirm("Would you like you password to include numbers?");
      console.log(hasNumbers);

      return(hasNumbers);
  }; 

var makePassword = function() {
  
};  
   
//will eventually be the function to combine responses into random password calculation to be inputted
var generatePassword = function() {
    criteriaLength();
    criteriaUppercase();
    criteriaLowercase();
    criteriaSpecialCharacters();
    criteriaNumbers();
    makePassword();

    return //makePassword()
  }  
    
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

