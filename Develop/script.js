// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Assignment code here

 generateBtn.onclick = function() {
    var promptLength = window.prompt("Please select a password length between 8 - 128 characters."); 
      if (promptLength >= 8 && promptLength <= 128) {
        console.log(promptLength);
        return promptLength;
      }  
      else {
        generateBtn.onclick();
      }  
  }
  


//will eventually be the function to combine responses into random password calculation to be inputted
//var generatePassword = function()

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
