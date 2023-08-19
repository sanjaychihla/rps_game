let choiceNames = ["Rock", "Paper", "Scissor"];

function getComputerChoice() {
    const computerChoice = choiceNames[(Math.floor(Math.random() * choiceNames.length))];
    console.log("Computer chose: "+computerChoice)
    return computerChoice;
}

let pSelection;
function promptSelection() {
    pSelection = prompt("Enter Your Selection");
    return pSelection;
}
promptSelection();
const playerSelection = pSelection.charAt(0).toUpperCase() + pSelection.slice(1).toLowerCase();

const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {

    if(computerSelection === "Rock") {
        if(playerSelection === "Scissor") console.log("You Lose!");
        else if(playerSelection === "Paper") console.log("You Win!");
        else console.log("It's a Draw!");
    }

    else if(computerSelection === "Paper") {
        if(playerSelection === "Rock") console.log("You Lose!");
        else if(playerSelection === "Scissor") console.log("You Win!");
        else console.log("It's a Draw!");
    }

    else if(computerSelection === "Scissor") {
        if(playerSelection === "Paper") console.log("You Lose!");
        else if(playerSelection === "Rock") console.log("You Win!");
        else console.log("It's a Draw!");
    }

}

playRound(playerSelection, computerSelection);