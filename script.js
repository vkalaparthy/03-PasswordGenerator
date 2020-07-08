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
  var lowerChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var specialArray = ['!', '"', '#', '$', '%', '&', '\'', '(',')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~' ];
  var numArray = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9'];

  var pwdLength = prompt("What is the lenght of the password you want to generate?");
  var resPwd = "";
  var criteria = 0;
  if ( (pwdLength >= 8) && (pwdLength <= 128)) {
    var lowChoice = confirm("Click OK to include lowercase characters in password");
    if (lowChoice) {
      criteria++;
    }
    var upChoice = confirm("Click OK to include UPPER case characters in password");
    if (upChoice) {
      criteria++;
    }
    var special = confirm("Click OK to include Special characters in password");
    if (special) {
      criteria++;
    }
    var numChoice = confirm("Click OK to include numbers in password");
    if (numChoice) {
      criteria++;
    }
    console.log ("lowercase " + lowChoice +" Upper case " + upChoice + " special char " + special + " Numbers " + numChoice);
    // If user selects atleast one, then continue
    if (criteria >= 1) {

      // Introducing the below code, so password generated will
      // not always be having a sequence!

      while (resPwd.length < (pwdLength-criteria)) {
        //randomly choose which array to access for your next character
        var whichArray = Math.floor(Math.random() * 4) + 1;
        console.log("choose array " + whichArray)
        if ((whichArray === 1) && lowChoice) {
          resPwd = resPwd + lowerChars[Math.floor(Math.random() * 26)];
          console.log (resPwd);
        }
        else if ((whichArray === 2) && upChoice) {
          resPwd = resPwd + upChars[Math.floor(Math.random() * 26)];
          console.log (resPwd);
        }
        else if ((whichArray === 3) && special) {
          resPwd = resPwd + specialArray[Math.floor(Math.random() * 33)];
          console.log (resPwd);
        }
        else if ((whichArray === 4) && numChoice) {
          resPwd = resPwd + numArray[Math.floor(Math.random() * 10)];
          console.log (resPwd);
        }
      }
      
      // Added the below code to make sure each criteria is selected atleast once.
      if (special) {
        resPwd = resPwd + specialArray[Math.floor(Math.random() * 33)];
        console.log (resPwd);
      }
      if (lowChoice) {
        resPwd = resPwd + lowerChars[Math.floor(Math.random() * 26)];
        console.log (resPwd);
      }
      if (numChoice) {
        resPwd = resPwd + numArray[Math.floor(Math.random() * 10)];
        console.log (resPwd);
      }
      if (upChoice) {
        resPwd = resPwd + upChars[Math.floor(Math.random() * 26)];
        console.log (resPwd);
      }

    } else {
      alert ("Try again, You need to choose atleast one criteria!")
    }
    
  } else {
    alert ("Try again, password could be 8 to 128 characters long!");
  }

  return resPwd;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
