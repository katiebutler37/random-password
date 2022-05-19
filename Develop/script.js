var getLength; 
var hasNumbers;
var hasSpecialCharacters;
var hasNumbers;
var hasUppercase;
var hasLowercase;

  var criteriaLength = function() {
  //ask user to input numeric value for password length
   getLength = window.prompt("Please select a password length between 8 - 128 characters."); 
     if (getLength >= 8 && getLength <= 128) {
       console.log(getLength);  
     }
     else {
       window.alert("Please select a valid response.")
       criteriaLength();
     }  
     return(getLength); 
   } 

 //ask user to decide if to include uppercase letters 
  var criteriaUppercase = function() {
     hasUppercase = window.confirm(" Would you like your password to contain UPPERCASE characters?");
        console.log(hasUppercase);

        return(hasUppercase);

   }

 //ask user to decide if to include lowercase letters 
  var criteriaLowercase = function() {
    hasLowercase = window.confirm(" Would you like your password to contain lowercase characters?");
     console.log(hasLowercase);

     return(hasLowercase);
}   

  var criteriaSpecialCharacters = function() {
   // ask user to decide if to include special characters  
     hasSpecialCharacters = window.confirm("Would you like your password to include special characters?");
      console.log(hasSpecialCharacters);

      return(hasSpecialCharacters);
    }

  var criteriaNumbers = function() {
    //ask user to decide if to include Numbers
    hasNumbers = window.confirm("Would you like you password to include numbers?");
      console.log(hasNumbers);

      return(hasNumbers);
  }  
   

//will eventually be the function to combine responses into random password calculation to be inputted
var generatePassword = function() {
    criteriaLength();
    criteriaUppercase();
    criteriaLowercase();
    criteriaSpecialCharacters();
    criteriaNumbers();

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

