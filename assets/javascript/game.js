     // variables holding the number of wins, losses, guesses left, guesses so far, etc.
    var wins = 0;
    var losses = 0;
    var guessLeft = 9;
    var guessedLetters = [];
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var computerGuess = "";

  
    // function for creating a new random number
    function randomNumber() {
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length -1)];
        console.log(computerGuess);
    }

    // function to reset the game
    function resetGame() {
        guessLeft = 9;
        guessedLetters = [];
        randomNumber();
    }

    // Variables that hold references to ids in HTML where we want to display things.
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessLeftText = document.getElementById("guess-left-text");
    var guessSoFarText = document.getElementById("guess-so-far-text");

// created a key press event listener
document.onkeyup = function(event) {
    // stores key the user press in a variable that I created
    var userGuess = event.key.toLowerCase();
    console.log(userGuess);

  if (computerChoices.includes(userGuess) && guessedLetters.includes(userGuess) === false){
      guessedLetters.push(userGuess);
      guessLeft--;

    if (userGuess === computerGuess) {
        wins++;
        resetGame();
    }

    else if (guessLeft === 0) {
        losses++;
        resetGame();

    }
}
// sets new text value in HTML and displays on webpage 
winsText.textContent = wins;
guessLeftText.textContent = guessLeft;
lossesText.textContent = losses;
guessSoFarText.textContent = guessedLetters;
   
};

  
