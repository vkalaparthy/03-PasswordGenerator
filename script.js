// Assignment Code

// This can be achieved by not defining globally but for this I am leaving it here.
var lowerChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialArray = ['!', '"', '#', '$', '%', '&', '\'', '(',')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~' ];
var numArray = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9'];
var pwdLength = 0;
var special, lowChoice, upChoice, numChoice;

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //var first = prompt("What is the lenght of the password you want to generate?")

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  pwdLength = prompt("What is the lenght of the password you want to generate?");
  console.log("Length choosen: " + pwdLength);
  var generatedPwd = "";
  var criteria;
  if ( (pwdLength >= 8) && (pwdLength <= 128)) {
    criteria = chooseYourCriteria();
    // If user selects atleast one, then continue
    if (criteria >= 1) {
      generatedPwd = firstConditionForPwd(generatedPwd);
      // Next - Randomly choose the array to add a character to password
      generatedPwd = randomlyGenerateRestOfPwd(generatedPwd);
      // shuffle this further 
      generatedPwd = shuffle(generatedPwd);
    } else {
      alert ("Try again, You need to choose atleast one criteria!")
    }
    
  } else if (!pwdLength) {
    alert ("Bye Bye!");
  } else {
    alert ("Try again, password should be 8 to 128 characters long!");
  }
  return generatedPwd;
}

function chooseYourCriteria() {
  var criteria = 0;
  lowChoice = confirm("Click OK to include lowercase characters in password");
    if (lowChoice) {
      criteria++;
    }
    upChoice = confirm("Click OK to include UPPER case characters in password");
    if (upChoice) {
      criteria++;
    }
    special = confirm("Click OK to include Special characters in password");
    if (special) {
      criteria++;
    }
    numChoice = confirm("Click OK to include numbers in password");
    if (numChoice) {
      criteria++;
    }
    console.log ("lowercase - " + lowChoice +" * Upper case - " + upChoice + " * special char - " + special + " * Numbers - " + numChoice);
    return criteria;
}

function firstConditionForPwd(resPwd) {
  // First make sure each criteria is selected atleast once 
  //Also used length fpr special as we ight add more to the array, rest of
  // the array sizes don't chnage, left it as 26, 10
  if (special) {
    resPwd = resPwd + specialArray[Math.floor(Math.random() * specialArray.length)];
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
  return resPwd;
}

function randomlyGenerateRestOfPwd(resPwd) {
  // Next - Randomly choose the array to add a character to password
  while (resPwd.length < pwdLength) {
    //randomly choose which array to access for your next character
    var whichArray = Math.floor(Math.random() * 4) + 1;
    //console.log("choose array " + whichArray)
    if ((whichArray === 1) && lowChoice) {
      resPwd = resPwd + lowerChars[Math.floor(Math.random() * 26)];
      console.log (resPwd);
    }
    else if ((whichArray === 2) && upChoice) {
      resPwd = resPwd + upChars[Math.floor(Math.random() * 26)];
      console.log (resPwd);
    }
    else if ((whichArray === 3) && special) {
      resPwd = resPwd + specialArray[Math.floor(Math.random() * specialArray.length)];
      console.log (resPwd);
    }
    else if ((whichArray === 4) && numChoice) {
      resPwd = resPwd + numArray[Math.floor(Math.random() * 10)];
      console.log (resPwd);
    }
  }
  return resPwd;
}

// This function shuffles the content of res - purposely made this
// shuffle first 1/2 of string to other 1/2 -- as it is already random!
function shuffle (res) {
  console.log ("password before shuffle: " + res + " length = "+res.length);
  var n = res.length;
  var m = Math.floor(n/2);
  //console.log ("m = " + m);
  var tmpPsw = res.split('');

  for (var i = m; i < res.length; i++) {
    //var tmp = resPwd[i];
    var j = Math.floor(Math.random() * m);
    var tmp = tmpPsw[i];
    //console.log ("i = "+i+" j = "+j +" & tmp "+ tmp);
    tmpPsw[i] = tmpPsw[j];
    tmpPsw[j] = tmp;
  }
  res = tmpPsw.join('');
  console.log ("password after shuffle: " + res + " length = "+res.length);
  return res;
}

