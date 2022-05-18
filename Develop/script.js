   //ask user to input 1,2 or 3, to decide on the cases used in the password  
  var criteriaCase = function() {
    var getCase = window.prompt(" Would you like your password to contain UPPERCASE characters, LOWERCASE characters or BOTH? Please enter 1 for UPPERCASE, 2 for LOWERCASE, or 3 for BOTH.");
    // convert answer from prompt to an actual number
    getCase = parseInt(getCase);
    // use switch case to carry out action
    switch (getCase) {
      case 1:
        console.log("uppercase");
        return("uppercase");
      case 2:
        console.log("lowercase");
        return("lowercase");
      case 3:
        console.log("both cases");
        return("both cases")
      default:
        window.alert("Please select a valid response.")
        criteriaCase();
    }
   }

   var criteriaCharacterType = function() {
     var getCharacterType = window.prompt("Would you like your password to contain NUMBERS, SPECIAL CHARACTERS or BOTH? Please enter 1 for NUMBERS, 2 for SPECIAL CHARACTERS, or 3 for BOTH.");
     // convert answer from prompt to an actual number
     getCharacterType = parseInt(getCharacterType);
     switch (getCharacterType) {
      case 1:
        console.log("numbers");
        return("numbers");
      case 2:
        console.log("special characters");
        return("special characters");
      case 3:
        console.log("both types");
        return("both types")
      default:
        window.alert("Please select a valid response.")
        criteriaCharacterType();
    }
   }
  
//will eventually be the function to combine responses into random password calculation to be inputted
var generatePassword = function() {
    //ask user to input numeric value for password length
     var getLength = window.prompt("Please select a password length between 8 - 128 characters."); 
       if (getLength >= 8 && getLength <= 128) {
         console.log(getLength);
         criteriaCase();
         criteriaCharacterType();
       }  
       else {
         generateBtn.addEventListener("click",writePassword);
       }  
       return(getLength);
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

