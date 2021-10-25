//Scorekeeping
let computerScore = 0;
let playerScore = 0;


// AI randomly chooses Rock, Paper or Scissors
let compOptions =  ['rock', 'paper', 'scissors']

function computerPlay(){
    let computerSelection = Math.floor(Math.random() * compOptions.length);
    return (compOptions[computerSelection]);
}


// Play One Round of RPS: Declare the winner && Award 1 point to the winner 
function playRound(playerSelection, computerSelection) {
  // Draw  
    if (playerSelection === computerSelection) {
      console.log('It\'s a draw');
  // Rock Selection
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
      computerScore++;
      console.log('Paper beats rock! You Lose!');
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
      playerScore++;
      console.log('Rock beats scissors! You Win!');
  // Paper Selection
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
      computerScore++;
      console.log('Scissors beats paper! You Lose!');
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
      playerScore++;
      console.log('paper beats rock! You Win!');
  // Scissors Selection  
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
      computerScore++;
      console.log('Rock beats scissors! You Lose!');
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
      playerScore++;
      console.log('Scissors beats paper! You Win!');
    } else {
      console.log('Please input a valid response.');
    }
}

let computerSelection = computerPlay();

//Take Player/Computer Input && Display Result
function game() {
  const playerSelection = prompt ('Choose: Rock, Paper or Scissors.').toLowerCase(); //Player responses Case Insensitive
  computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  console.log('PLAYER:' + playerScore,' COMPUTER:' + computerScore);
}

//Play Five Rounds without Using Loops - Declare a Winner/Loser
game();
game();
game();
game();
game();
if (playerScore > computerScore) {
  console.log('CONGRATULATIONS! You won the game!');
} else if (playerScore < computerScore) {
  console.log('YOU LOST THE GAME! Better luck next time!');
} else {
  console.log('IT\'S A DRAW! Try again?');
}








