//create array possibleChoices
possibleChoices = ['rock', 'paper', 'scissors'];

//create function getComputerChoice
//return index 0-2 randomly
function getComputerChoice() {
    let choice = possibleChoices[Math.floor(Math.random() * 3)];
    return choice;
}

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
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            return "Scissors vs Paper, you win!";
        } else if (computerSelection === 'rock') {
            return "Scissors vs Rock, you lose.";
        } else if (computerSelection === 'scissors') {
            return "Scissors vs Scissors, it's a tie!";
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return "Paper vs Rock, you win!";
        } else if (computerSelection === 'scissors') {
            return "Paper vs Scissors, you lose.";
        } else if (computerSelection === 'paper') {
            return "Paper vs Paper, it's a tie!";
        }
    } else {
        return "Invalid input, please pick rock, paper, or scissors."
    }
}

//create function game, play 5 rounds and report if you lose or win each time
function game() {
    //counting rounds, starting at zero and adding +1 to counter on each loop
    let counter = 0;

    

    //game start
    while (counter < 5) {
        //prompt for player selection
        let playerSelection = prompt('Rock, Paper, or Scissors?', 'rock');
        //make sure prompt isn't case sensitive
        playerSelection = playerSelection.toLowerCase();

        //computer choice
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        counter++;        
    }
}



game();