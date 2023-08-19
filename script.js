let choiceNames = ["Rock", "Paper", "Scissor"];

function getComputerChoice() {
    const computerChoice = choiceNames[(Math.floor(Math.random() * choiceNames.length))];
    console.log("Computer chose: "+computerChoice)
    return computerChoice;
}

const pSelection = prompt("Enter Your Selection");
const playerSelection = pSelection.charAt(0).toUpperCase() + pSelection.slice(1).toLowerCase();

const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {

    if(computerSelection === "Rock") {
        if(playerSelection === "Scissor") console.log("Lose!");
        else if(playerSelection === "Paper") console.log("Win!");
        else console.log("Draw!");
    }

    else if(computerSelection === "Paper") {
        if(playerSelection === "Rock") console.log("Lose!");
        else if(playerSelection === "Scissor") console.log("Win!");
        else console.log("Draw!");
    }

    else if(computerSelection === "Scissor") {
        if(playerSelection === "Paper") console.log("Lose!");
        else if(playerSelection === "Rock") console.log("Win!");
        else console.log("Draw!");
    }

}

playRound(playerSelection, computerSelection);