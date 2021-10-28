//Scorekeeping
let computerPoints = 0;
let playerPoints = 0;


// AI randomly chooses Rock, Paper or Scissors
let compOptions =  ['rock', 'paper', 'scissors']

function computerPlay(){
    let computerSelection = Math.floor(Math.random() * compOptions.length);
    return (compOptions[computerSelection]);       
}

// Play One Round of RPS: Declare the winner && Award 1 point to the winner 
function playRound(playerSelection) {
  let computerSelection = computerPlay();
  // Draw  
    if (playerSelection === computerSelection) {
      console.log('It\'s a draw');
      result.textContent = 'It\'s a draw';
  // Rock Selection
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
      computerPoints++;
      console.log('Paper beats rock! You Lose!');
      result.textContent = 'Paper beats rock! You Lose!';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
      playerPoints++;
      console.log('Rock beats scissors! You Win!');
      result.textContent = 'Rock beats scissors! You Win!';
  // Paper Selection
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
      computerPoints++;
      console.log('Scissors beats paper! You Lose!');
      result.textContent = 'Scissors beats paper! You Win!';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
      playerPoints++;
      console.log('Paper beats rock! You Win!');
      result.textContent = 'Paper beats rock! You Win!';
  // Scissors Selection  
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
      computerPoints++;
      console.log('Rock beats scissors! You Lose!');
      result.textContent = 'Rock beats scissors! You Lose!';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
      playerPoints++;
      console.log('Scissors beats paper! You Win!');
      result.textContent = 'Scissors beats paper! You Win!';
    } else {
      console.log('Please input a valid response.');
    }
    userScore.textContent = 'PLAYER SCORE:' + playerPoints;
    compScore.textContent = 'COMPUTER SCORE:' + computerPoints;
    compSelection.textContent = 'Computer Chose ' + computerSelection;
    
    if (computerPoints === 5){
      computerWins.textContent = "Uh Oh! You Lost to the Computer!"

    }
    if (playerPoints === 5) {
      playerWins.textContent = "Congratulations! You beat the Computer!"
      window.addEventListener('click', refreshPage());
    }
}


//EventListeners. Call playRound() on 'click'
const rock = document.querySelector('.option1');
const paper = document.querySelector('.option2');
const scissors = document.querySelector('.option3');

rock.addEventListener('click', e => {
  playRound('rock');  
  })
paper.addEventListener('click', e => {
  playRound('paper');  
  })
scissors.addEventListener('click', e => {
  playRound('scissors');  
  })



//Results
const container = document.querySelector('#container');


const userScore = document.createElement('div');
userScore.classList.add('userScore');
userScore.textContent = 'PLAYER SCORE:' + playerPoints;

const compScore = document.createElement('div');
compScore.classList.add('compScore');
compScore.textContent = 'COMPUTER SCORE:' + computerPoints;

const compSelection = document.createElement('div');
compSelection.classList.add('compSelection');
//compScore.textContent = 'COMPUTER SCORE:' + computerSelection;

const result = document.createElement('div');
result.classList.add('result');

const playerWins = document.createElement('div');
playerWins.classList.add('playerWins');

const computerWins = document.createElement('div');
computerWins.classList.add('computerWins');


container.appendChild(userScore);
container.appendChild(compScore);
container.appendChild(compSelection);
container.appendChild(result);
container.appendChild(playerWins);
container.appendChild(computerWins);

//Refresh window/New Game
function refreshPage(){
  reload = location.reload();
}



/*~~ PREVIOUS VERSION CODE ~~
//Take Player/Computer Input && Display Result
function game() {
  const playerSelection = //prompt ('Choose: Rock, Paper or Scissors.').toLowerCase(); //Player responses Case Insensitive
  computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  console.log('PLAYER:' + playerScore,' COMPUTER:' + computerScore);
}

//Play Five Rounds without Using Loops - Declare a Winner/Loser
/*game();
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
*/




