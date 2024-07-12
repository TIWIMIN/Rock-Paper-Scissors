function getComputerChoice() {
    let result = 3 * Math.random();
    console.log(result);
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
    let choice = prompt(message);
    return choice; 
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        choice = humanChoice.toLowerCase();
        
        switch(choice) {
            case "rock": 
                if (computerChoice === "rock") {
                    console.log("Tie Round! Try again");
                }
                else if (computerChoice === "paper") {
                    console.log("You Lose! Paper beats Rock");
                    computerScore++;
                }
                else if (computerChoice === "scissors") {
                    console.log("You Win! Rock beats Scissors");
                    humanScore++;
                }
                break;
    
            case "paper": 
                if (computerChoice === "rock") {
                    console.log("You Win! Paper beats Rock");
                    humanScore++;
                }
                else if (computerChoice === "paper") {
                    console.log("Tie Round! Try Again");
                }
                else if (computerChoice === "scissors") {
                    console.log("You Lose! Scissor beats Paper");
                    computerScore++;
                }
                break;
    
            case "scissors": 
                if (computerChoice === "rock") {
                    console.log("You Lose! Rock beats Scissors");
                    computerScore++;
                }
                else if (computerChoice === "paper") {
                    console.log("You Win! Scissors beats Paper");
                    humanScore++; 
                }
                else if (computerChoice === "scissors") {
                    console.log("Tie Round! Try Again");
                }
                break;
    
            default: 
                console.log("Please enter Rock, Paper, or Scissors")
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice()); 
    }
    
}

playGame();



