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
    prompt(message, "rock, paper, or scissors")
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        
        switch(humanChoice) {
            case "rock": 
                if (computerChoice === "rock") {
                    console.log("Tie Round! Try again");
                }
                if (computerChoice === "paper") {
                    console.log("You Lose! Paper beats Rock");
                    computerScore++;
                }
                if (computerChoice === "scissors") {
                    console.log("You Win! Rock beats Scissors");
                    humanScore++;
                }
    
            case "paper": 
                if (computerChoice === "rock") {
                    console.log("You Win! Paper beats Rock");
                    humanScore++;
                }
                if (computerChoice === "paper") {
                    console.log("Tie Round! Try Again");
                }
                if (computerChoice === "scissors") {
                    console.log("You Lose! Scissor beats Paper");
                    computerScore++;
                }
    
            case "scissors": 
                if (computerChoice === "rock") {
                    console.log("You Lose! Rock beats Scissors");
                    computerScore++;
                }
                if (computerChoice === "paper") {
                    console.log("You Win! Scissors beats Paper");
                    humanScore++; 
                }
                if (computerChoice === "scissors") {
                    console.log("Tie Round! Try Again");
                }
    
            default: 
                console.log("Please enter Rock, Paper, or Scissors")
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice()); 
    }
    
}

playGame();



