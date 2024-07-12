function getComputerChoice() {
    let result = 3 * Math.random
    if (result <= 1) {
        return "rock"; 
    }
    else if (result <= 2) {
        return "paper";
    }
    else {
        return "scissors";
    }

}

function getHumanChoice() {
    let message = "3, 2, 1, Shoot!";
    prompt(message, "rock")
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    
    switch(humanChoice) {
        case "rock": 
            if (computerChoice === "rock") {
                console.log("Tie Round! Try again");
            }
            if (computerChoice === "paper") {
                console.log("You Lose! Paper beats Rock");
            }
            if (computerChoice === "scissors") {
                console.log("You Win! Rock beats Scissors");
            }

        case "paper": 
            if (computerChoice === "rock") {
                console.log("You Win! Paper beats Rock");
            }
            if (computerChoice === "paper") {
                console.log("Tie Round! Try Again");
            }
            if (computerChoice === "scissors") {
                console.log("You Lose! Scissor beats Paper");
            }

        case "scissors": 
            if (computerChoice === "rock") {
                console.log("You Lose! Rock beats Scissors");
            }
            if (computerChoice === "paper") {
                console.log("You Win! Scissors beats Paper");
            }
            if (computerChoice === "scissors") {
                console.log("Tie Round! Try Again");
            }

        default: 
            console.log("Please enter Rock, Paper, or Scissors")
    }
}

let humanScore = 0;
let computerScore = 0;

