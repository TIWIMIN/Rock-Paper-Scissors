let computerScore = 0;
let humanScore = 0;

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

const rockButton = document.querySelector("#Rock");
const paperButton = document.querySelector("#Paper");
const scissorsButton = document.querySelector("#Scissors");

const scoreBoard = document.querySelector("#Score");
scoreBoard.textContent = `The score is 0 - 0`;

rockButton.addEventListener("click", () => {
    playRound("Rock", getComputerChoice());
    scoreBoard.textContent = `The score is ${humanScore} - ${computerScore}`;
});
paperButton.addEventListener("click", () => {
    playRound("Paper", getComputerChoice());
    scoreBoard.textContent = `The score is ${humanScore} - ${computerScore}`;
});
scissorsButton.addEventListener("click", () => {
    playRound("Scissors", getComputerChoice());
    scoreBoard.textContent = `The score is ${humanScore} - ${computerScore}`;
});


playGame();



