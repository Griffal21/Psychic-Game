//Declaring varibles for Wins, Losses, guesses left, an array which will be the bank of guessed letters, and an array for the possible choices

var wins = 0;
var loss = 0;
var guess = 9;
var bank = [];
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
  "u", "v", "w", "x", "y", "z"
]
var cpuGuess = ""

var DidcpuGuess = false;

//this starts the game 
document.onkeyup = function (event) {
  //setting up the user input
  var userInput = event.key;

  //computer makes it's guess,  I'm going for the array length as the multiplier instead of "26" so more choices can be added later more easily

  //this is so the computer will not change their guess every time the user makes one
  if (DidcpuGuess === false) {
    cpuGuess = alpha[Math.floor(Math.random() * alpha.length)];
    DidcpuGuess = true;

  };
  //dev tools to help test functions more easily
  console.log("cpu " + cpuGuess);
  console.log("user " + userInput);

  //This is to check if a user guesses something that they already guesses
  var AlreadyGuess = false;
  AlreadyGuess = bank.includes(userInput);
  //this will return true if they already guessed that letter
  if (AlreadyGuess === true) {
    alert("You already guessed " + userInput + "!")
    guess++;
    AlreadyGuess = false;
  };


  //based on what key something happens
  //if the user guesses correctly they add a win, and the bank resets to empty and guesses reset to 9
  //if (userInput.toLocaleLowerCase === cpuGuess) {
  if (userInput === cpuGuess) {
    wins++;
    bank = [];
    guess = 9;
    DidcpuGuess = false;
  };
  //if the user guess incorrectly and they still has more guesses left
  // if ((userInput.toLowerCase !== cpuGuess) && (guess > 0)) {
  if ((userInput !== cpuGuess) && (guess > 0)) {
    bank.push(userInput + " ");
    guess--;
  };
  //if the user guess incorreclty on their last guess, they have one added to theyr losses, the bank resets and their guesses reset.
  //if ((userInput.toLocaleLowerCase !== cpuGuess) && (guess === 0)) {
  if ((userInput !== cpuGuess) && (guess === 0)) {
    loss++;
    bank = [];
    guess = 9;
    DidcpuGuess = false;
  };




  //displays the score of the game and the guesses
  document.getElementById("wins").innerHTML = "Wins: " + wins;
  document.getElementById("loss").innerHTML = "Losses: " + loss;
  document.getElementById("guessLeft").innerHTML = "Guesses Left: " + guess;
  document.getElementById("userGuess").innerHTML = "You Guessed: " + bank;

};