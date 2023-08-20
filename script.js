let choiceNames = ["Rock", "Paper", "Scissor"];

function getComputerChoice() {
    const computerChoice = choiceNames[(Math.floor(Math.random() * choiceNames.length))];
    console.log("Computer chose: "+computerChoice)
    return computerChoice;
}

let pSelection;
function promptSelection() {
    pSelection = prompt("Please enter:- Rock Or Paper Or Scissor");

    //Check if string is null or contains numbers in it.
    /*if(pSelection === null || /[0-9]/.test(pSelection)) {
        console.log("Wrong Input:- "+pSelection);
        promptSelection();
    }*/

    //
    if(pSelection.charAt(0).toUpperCase() + pSelection.slice(1).toLowerCase() === "Rock" || pSelection.charAt(0).toUpperCase() + pSelection.slice(1).toLowerCase() === "Paper" || pSelection.charAt(0).toUpperCase() + pSelection.slice(1).toLowerCase() === "Scissor") {
        console.log("Player Input:- "+pSelection+" -----> Auto corrected to:- "+pSelection.charAt(0).toUpperCase() + pSelection.slice(1).toLowerCase());
        pSelection = pSelection.charAt(0).toUpperCase() + pSelection.slice(1).toLowerCase();
        return pSelection;
    }

    else {
        console.log("Wrong Input:- "+pSelection);
        promptSelection();
    }
}

promptSelection();

const playerSelection = pSelection;

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