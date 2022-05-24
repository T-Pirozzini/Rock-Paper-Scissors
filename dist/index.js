//Scorekeeping
let computerPoints = 0;
let playerPoints = 0;

// AI Selection
let compOptions =  ['rock', 'paper', 'scissors'];

function computerPlay(){
  let computerSelection = Math.floor(Math.random() * compOptions.length);    
  return (compOptions[computerSelection]);       
};

// Player Selection
const rock = document.querySelector('.option-rock');
const paper = document.querySelector('.option-paper');
const scissors = document.querySelector('.option-scissors');

rock.addEventListener('click', e => {    
    playRound('rock');  
});
paper.addEventListener('click', e => {
  playRound('paper');  
});
scissors.addEventListener('click', e => {
  playRound('scissors');  
});

// Display Results
const container = document.querySelector('#results-container');

const compSelection = document.createElement('div');
compSelection.classList.add('compSelection');
container.appendChild(compSelection);
compSelection.textContent = 'Computer is waiting for your selection.';

const result = document.createElement('div');
result.classList.add('result');
container.appendChild(result);
result.textContent = 'Rock, Paper or Scissors?';

const playerWins = document.createElement('div');
playerWins.classList.add('winner');
container.appendChild(playerWins);

const computerWins = document.createElement('div');
computerWins.classList.add('winner');
container.appendChild(computerWins);

const userScore = document.createElement('div');
userScore.classList.add('userScore');
userScore.textContent = 'PLAYER SCORE: ' + playerPoints;
container.appendChild(userScore);

const compScore = document.createElement('div');
compScore.classList.add('compScore');
compScore.textContent = 'COMPUTER SCORE: ' + computerPoints;
container.appendChild(compScore);

// Play One Round of RPS: Declare the winner && Award 1 point to the winner
function playRound(playerSelection) {
  let computerSelection = computerPlay(); 
  if (playerPoints < 5 && computerPoints < 5){    
    // Draw  
    if (playerSelection === computerSelection) {      
      result.textContent = 'It\'s a draw';
    // Rock Selection
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
      computerPoints++;     
      result.textContent = 'Paper beats rock! You Lose!';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
      playerPoints++;      
      result.textContent = 'Rock beats scissors! You Win!';
    // Paper Selection
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
      computerPoints++;      
      result.textContent = 'Scissors beats paper! You Win!';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
      playerPoints++;      
      result.textContent = 'Paper beats rock! You Win!';
    // Scissors Selection  
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
      computerPoints++;
      result.textContent = 'Rock beats scissors! You Lose!';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
      playerPoints++;      
      result.textContent = 'Scissors beats paper! You Win!';
    } else {      
      result.textContent = 'Please input a valid response.';
    }
  }
  // Display updated score
  userScore.textContent = 'PLAYER SCORE: ' + playerPoints;
  compScore.textContent = 'COMPUTER SCORE: ' + computerPoints;
  compSelection.textContent = 'Computer Chose: ' + computerSelection.toUpperCase();

  // Announce winner  
  if (computerPoints === 5){    
    computerWins.textContent = "Uh Oh! You Lost to the Computer!";
    result.textContent = '';
    compSelection.textContent = '';  
  }
  if (playerPoints === 5) {    
    playerWins.textContent = "Congratulations! You beat the Computer!";
    result.textContent = '';
    compSelection.textContent = ''; 
  } 
}

 