// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //var first = prompt("What is the lenght of the password you want to generate?")

  passwordText.value = password;

}

function generatePassword() {

  // This can be achieved by just defining a whole string
  //"abcdefgh" etc but for homework, I am using array
  var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var specialArray = [" ", "!", "\"", "#", "$", "%", "&", "'", "(",")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "\[", "\\", "\]", "^", "_", "`", "{", "|", "}", "~"];
  var numArray = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var pwdLeng = prompt("What is the lenght of the password you want to generate?");
  var resPwd = "";
  if ( (pwdLeng >= 8) && (pwdLeng <= 128)) {
    var lowChoice = confirm("Click OK to include lowercase characters in password");
    var upChoice = confirm("Click OK to include UPPER case characters in password");
    var special = confirm("Click OK to include Special characters in password");
    var numChoice = confirm("Click OK to include numbers in password");
    console.log ("lowercase " + lowChoice +" Upper case " + upChoice + " special char " + special + " Numbers " + numChoice);
    // If user selects atleast one, then continue
    if (lowChoice || upChoice || special || numChoice) {
      console.log ("Inside if resPwd is "+resPwd);
      while (resPwd.length < pwdLeng) {
        console.log ("Inside for loop");
        //randomly choose which array to access for your next character
        var choiceArray = Math.floor(Math.random() * 4) + 1;
        console.log("choose array "+choiceArray)
        if ((choiceArray === 1) && lowChoice) {
          resPwd = resPwd + lowerChars[Math.floor(Math.random() * 26)];
          console.log (resPwd);
        }
        else if ((choiceArray === 2) && upChoice) {
          resPwd = resPwd + upChars[Math.floor(Math.random() * 26)];
          console.log (resPwd);
        }
        else if ((choiceArray === 3) && special) {
          resPwd = resPwd + specialArray[Math.floor(Math.random() * 33)];
          console.log (resPwd);
        }
        else if ((choiceArray === 4) && numChoice) {
          resPwd = resPwd + numArray[Math.floor(Math.random() * 10)];
          console.log (resPwd);
        }
      }

    }
    
  } else {
    alert ("Try again, length should be between 8 and 128 characters!");
  }

  return resPwd;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
