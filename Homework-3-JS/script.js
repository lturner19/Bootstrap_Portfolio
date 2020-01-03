// Assignment Code
var generateBtn = document.querySelector("#generate");




// Write password to the #password input (generate random password)
lowerCaseAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
upperCaseAlpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
number = ["0", "1", "0", "2", "3", "4", "5", "6", "7", "8", "9"];
symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
randomCharacters = [];




function writePassword() {

  var charcNumber = parseInt(prompt("How many characters would you like your password to contain?"));
  if (charcNumber < 8 || charcNumber > 128) {
    alert("Please pick a number between 8 and 128");
  }

  choiceLowerCase()
  choiceUpperCase()
  choiceNumber()
  choiceSymbol()


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
      result randomCharacters;
    }
  }

  function choiceNumber() {
    var gamma = confirm("Would you like to use capital letters?")
    if (gamma) {
      randomCharacters = randomCharacters.concat(number);
      console.log(randomCharacters);
    }
  }

  function choiceSymbol() {
    var delta = confirm("Would you like to use capital letters?")
    if (delta) {
      randomCharacters = randomCharacters.concat(symbol);
      console.log(randomCharacters);
    }
  }


}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

