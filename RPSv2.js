var playerScore = 0;
var computerScore = 0;
let tie = 0;
let humanPick = '';
let compPick = '';
//game();

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => { 
    button.addEventListener('click', () => {
      computerPlay();
      return humanPick = (button.id)
    });
});

function computerPlay(){
    var randomChoice = Math.floor(Math.random() * 3);  
   
    if (randomChoice === 0) {
        compChoice = 'rock';
    } else if (randomChoice === 1) {
        compChoice = 'paper';
    } else if (randomChoice === 2) {
        compChoice = 'scissors';
    }
    return compPick = compChoice
}

function playRound(humanPick, compPick) {      
  if (compPick === humanPick) {
    tie++;
    //console.log('We\'ve Tied');
    
  }
  if (humanPick === 'Rock') {
    if (compPick === 'Scissors') {
      playerScore++;
      console.log('Human wins! Rock beats Scissors!'); 
           
    } else {
      computerScore++;
      console.log('Computer wins! Paper beats rock!');          
    }
  }
  if (humanPick === 'Paper'){
    if (compPick === 'Rock') {
      playerScore++;
      console.log('Human Wins! Paper beats rock!');
    } else {
      computerScore++;
      console.log('Computer Wins! Scissors beats Paper!');
    }
  }
  if (humanPick === 'Scissors'){
    if(compPick === 'Paper'){
      playerScore++;
      console.log('Human Wins! Sissors beat paper');
    } else {
      computerScore++;
      console.log('Computer Wins! Rock beats scissors!');
    }
  }
  console.log('Humans: ' + playerScore + '. Computers: ' + computerScore + '. Tie: ' + tie)
}

function games(humanPick, compPick, playerScore, computerScore, tie) {
 
  playRound(humanPick, compPick)
}






/*
function game() {
  for (round=0; round<5; round++){
    let playerSelection = humanPlay();
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  }
  */
