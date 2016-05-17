//
var counter = 0;
//
var number;
//
var name;

//start function to set up game
$(document).ready(function() {
  name = prompt("What's ur name dood?");
  number = randomNum();
  $("#guessButton").on(
    "click",
    checkGuess);
  $("#newGame").on("click", newGame);

  $("#nameID").text("Hey there, " + name);


  //start function generate random number
  function randomNum() {
    return (Math.floor(Math.random() * 100) + 1);
  } // end function

  // start function to compare numbers
  function checkHiLo(guess) {
    if(guess > number) {
      return "Your guess is too high. You have " + (7 - counter) + "tries left."
    } else {
      return "Your guess is too low. You have " + (7 - counter) + "tries left."
    };
  }// end function

  //start function to display score & check if the guess is correct
  function checkGuess() {
    counter = counter + 1;
    var guess = parseInt($("#inputField").val());
    var scoreFromUI = parseInt($("#score").text());
    if((guess != number) && (counter <= 7)) {
      alert(checkHiLo(guess));
    } else {
      if(guess === number) {
        alert("You win " + name + " Your score is" + score());
        $("#score").text(scoreFromUI + score());
      }
      else {
        alert("You lose. Your score is " + score());
        $("#score").text(scoreFromUI + score());
      }
    }
  }// end function

  //start score function
  function score() {
    return 100 - ((counter - 1) * 20);
  };//end function

  //begin start new game button configuration
  function newGame() {
    number = randomNum();
    counter = 0;
  }

  }
); //end function
