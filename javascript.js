//create array possibleChoices
possibleChoices = ['rock', 'paper', 'scissors'];

//create function getComputerChoice
//return index 0-2 randomly
function getComputerChoice() {
    let choice = possibleChoices[Math.floor(Math.random() * 3)];
    return choice;
}

let computerSelection = getComputerChoice();
//testing computerSelection
console.log(computerSelection);

//create function playRound and return winner via if/else logic
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return "Rock vs Paper, you lose.";
        } else if (computerSelection === 'scissors') {
            return "Rock vs Scissors, you win!";
        } else if (computerSelection === 'rock') {
            return "Rock vs Rock, it's a tie!";
        }
    }
}

//player selection here
let playerSelection = 'rock';
console.log(playRound(playerSelection, computerSelection));