let choiceNames = ["Rock", "Paper", "Scissor"];

// Let's computer to make a choice for the game.
function getComputerChoice() {
    const computerChoice = choiceNames[(Math.floor(Math.random() * choiceNames.length))];
    console.log("Computer chose: "+computerChoice)
    return computerChoice;
}

// Save first input in pSelection, Because player input might need a correction.
let pSelection;

function promptSelection() {
    pSelection = prompt("Please enter:- Rock Or Paper Or Scissor \n\n NOTE:-RESPECT THE CASE SENSITIVENESS.");

    //Check if string is null or contains numbers in it.
    /*if(pSelection === null || /[0-9]/.test(pSelection)) {
        console.log("Wrong Input:- "+pSelection);
        promptSelection();
    }*/

    // Check if corrected string is strictly equals to main strings or not, if yes then return that corrected string.
    if(pSelection.charAt(0).toUpperCase() + pSelection.slice(1).toLowerCase() === "Rock" || pSelection.charAt(0).toUpperCase() + pSelection.slice(1).toLowerCase() === "Paper" || pSelection.charAt(0).toUpperCase() + pSelection.slice(1).toLowerCase() === "Scissor") {
        console.log("Player Input:- "+pSelection+" -----> Auto corrected to:- "+pSelection.charAt(0).toUpperCase() + pSelection.slice(1).toLowerCase());
        pSelection = pSelection.charAt(0).toUpperCase() + pSelection.slice(1).toLowerCase();
        return pSelection;
    }

    // Else ask for correct input.
    else {
        console.log("Wrong Input:- "+pSelection);
        promptSelection();
    }
}

promptSelection();

// Save corrected input in playerSelection variable.
const playerSelection = pSelection;

// Get computer selection from getComputerChoice() method.
const computerSelection = getComputerChoice();

// Real logic behind the game, function returns the Result.
function playRound(playerSelection, computerSelection) {

    let result;
    if(computerSelection === "Rock") {
        if(playerSelection === "Scissor") result = "You Lose!";
        else if(playerSelection === "Paper") result = "You Win!";
        else result = "It's a Draw!";
    }

    else if(computerSelection === "Paper") {
        if(playerSelection === "Rock") result = "You Lose!";
        else if(playerSelection === "Scissor") result = "You Win!";
        else result = "It's a Draw!";
    }

    else {
        if(playerSelection === "Paper") result = "You Lose!";
        else if(playerSelection === "Rock") result = "You Win!";
        else result = "It's a Draw!";
    }

    console.log(result);

}

playRound(playerSelection, computerSelection);