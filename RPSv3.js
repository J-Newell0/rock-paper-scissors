// initilizing varibles to allow game to store choices and resluts
var playerScore = 0;
var computerScore = 0;
// var tie = 0;   not keeping track of ties 
let userPick = '';
let computerPick = '';
let round = 1;

// Name Scorecards in order to allow them to be updated
const userScore = document.querySelector('.user-score');
const compScore = document.querySelector('.computer-score');

//Naming wrappers
const playerProfile = document.querySelector('.human-profile');
const computerProfile = document.querySelector('.computer-profile');
const gameWrapper = document.querySelector('.gameWrapper');

//Creating button to refresh page
const newGame = document.createElement('div');
newGame.textContent = 'Play Again!';
newGame.classList.add('button', 'refresh');

//Refrensh Function
function refreshBrowser() {
  window.location.reload(true);
}

//Turn log
let resultsArray = [];
let resultsLog = document.createElement('ul');
resultsLog.classList.add('round-result');
gameWrapper.insertAdjacentElement('afterend', resultsLog);


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => { 
    button.addEventListener('click', () => {
      computerPlay();
      let userPick = (button.id)
      playRound(userPick, computerPick);    //going to have to make another function to run this and keep 5 rounds to refresh
      console.log(userPick + '::' + computerPick);  //Allows me to see the variables are being set correctly
      console.log('Humans: ' + playerScore + '. Computers: ' + computerScore);
    });
});

function playLog() {
  var li = document.createElement('li');
  li.textContent = resultsArray[`${resultsArray.length -1}`];
  resultsLog.insertAdjacentElement('afterbegin', li);
}

function computerPlay(){
    var randomChoice = Math.floor(Math.random() * 3);  
   
    if (randomChoice === 0) {
        compChoice = 'rock';
    } else if (randomChoice === 1) {
        compChoice = 'paper';
    } else if (randomChoice === 2) {
        compChoice = 'scissors';
    }
    return computerPick = compChoice
}

function playRound(userPick, computerPick) {      
  
  if (
      (userPick === 'rock' && computerPick === 'scissors') ||
      (userPick === 'paper' && computerPick === 'rock') ||
      (userPick === 'scissors' && computerPick === 'paper') &&
      (computerScore <= 5 || playerScore <= 5)
  ) {
      playerScore++;   //increments Players Score for winning round
      resultsArray.push(`You've won round ${round}: ${userPick} beats ${computerPick}. Score: ${playerScore} :: ${computerScore}`);
      userScore.textContent = `${playerScore}`;
      if ( playerScore >=5 ) {
        resultsArray.push(`YOU'VE WON! You gave the killing blow with ${userPick}, beating ${computerPick}!`);
        resultsLog.insertAdjacentElement('beforebegin', newGame);
      }
      round++;
      
  } else if (
  (userPick === 'rock' && computerPick === 'paper') ||
  (userPick === 'paper' && computerPick === 'scissors') ||
  (userPick === 'scissors' && computerPick === 'rock' &&
  (computerScore <= 5 || playerScore <= 5))
) {
    computerScore++
    resultsArray.push(`Computer won round ${round}: ${computerPick} beats ${userPick}. Score: ${playerScore} :: ${computerScore}`);
    compScore.textContent = `${computerScore}`;
    if ( computerScore >= 5 ) {
      resultsArray.push(`COMPUTER WINS! You can't win them all. Computer won with ${computerPick} beating out your ${userPick}`);
      resultsLog.insertAdjacentElement('beforebegin', newGame);
    }
    round++; 
    
  } else {
    resultsArray.push(`You've both chosen the same weapon! It's a tie for round ${round}.`);
    round++;
  }
  playLog();
}


newGame.addEventListener('click', refreshBrowser);