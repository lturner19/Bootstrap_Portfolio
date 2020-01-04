// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input (generate random password)
var lowerCaseAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseAlpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var number = ["0", "1", "0", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
randomCharacters = [];
var groupSelected = "";



function writePassword() {

  var charcNumber = parseInt(prompt("How many characters would you like your password to contain?"));
  if (charcNumber < 8 || charcNumber > 128) {
    alert("Please pick a number between 8 and 128");
  }
  //This calls the specific functions
  choiceLowerCase()
  choiceUpperCase()
  choiceNumber()
  choiceSymbol()

  //These functions have the user choose what type of characters they want for their password.
  function choiceLowerCase() {
    var alpha = confirm("Would you like to use lower letters?")
    if (alpha) {
      randomCharacters = randomCharacters.concat(lowerCaseAlpha);
    }
  }

  function choiceUpperCase() {
    var beta = confirm("Would you like to use capital letters?")
    if (beta) {
      randomCharacters = randomCharacters.concat(upperCaseAlpha);
    }
  }

  function choiceNumber() {
    var gamma = confirm("Would you like to use numbers?")
    if (gamma) {
      randomCharacters = randomCharacters.concat(number);
    }
  }

  function choiceSymbol() {
    var delta = confirm("Would you like to use symbols?")
    if (delta) {
      randomCharacters = randomCharacters.concat(symbol);
    }
  }

  //This will randomly generate the password based on the user input.

  for (a = 0; a < charcNumber; a++) {
    groupSelected = groupSelected.concat(randomCharacters[Math.floor(Math.random() * Math.floor(randomCharacters.length))]);
    console.log(groupSelected[a]);
  }
  //This will allow the result of the randomly generated password to be output.
  return groupSelected;
}

//passwordText.value = password;
//  copyBtn.removeAttribute("disabled");
//copyBtn.focus();


//function copyToClipboard() {
//


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

