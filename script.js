let choiceNames = ["Rock", "Paper", "Scissor"];

// Let's computer to make a choice for the game.
function getComputerChoice() {
    const computerChoice = choiceNames[(Math.floor(Math.random() * choiceNames.length))];
    console.log("Computer chose :- "+computerChoice)
    return computerChoice;
}

function promptSelection() {
    // Save first input in pSelection, Because player input might need a correction.
    let pSelection = prompt("Please enter :- Rock Or Paper Or Scissor");

    //Check if string is null or contains numbers in it.
    /*if(pSelection === null || /[0-9]/.test(pSelection)) {
        console.log("Wrong Input:- "+pSelection);
        promptSelection();
    }*/

    // Check if string entered is not null then enter if ->
    if(pSelection != null) {

        if(pSelection === "") {
            alert("Input cannot be empty. Player must enter a choice.\nPress OK to continue...");
            promptSelection();
        }

        //Correct the string and check if corrected string is strictly equals to required strings or not, if yes then return that corrected string.
        else if(pSelection.charAt(0).toUpperCase() + pSelection.slice(1).toLowerCase() === "Rock" || pSelection.charAt(0).toUpperCase() + pSelection.slice(1).toLowerCase() === "Paper" || pSelection.charAt(0).toUpperCase() + pSelection.slice(1).toLowerCase() === "Scissor") {
            console.log("\nPlayer Input :- "+pSelection)
            console.log("Auto corrected to :- "+pSelection.charAt(0).toUpperCase() + pSelection.slice(1).toLowerCase());
            pSelection = pSelection.charAt(0).toUpperCase() + pSelection.slice(1).toLowerCase();
            return pSelection;
        }

        // Else ask for correct input.
        else {
            alert("Wrong input :- "+pSelection+"     X "+"\nPlease enter :- Rock Or Paper Or Scissor\nPress OK to continue...");
            console.log("Wrong Input :- "+pSelection);
            promptSelection();
        }
    }

    // Player can't leave without playing... :D
    else {
        alert("Player cannot leave the game and must enter a choice.\nPress OK to continue... ");
        promptSelection();
    }
}
// Variables to save player input and computer input.
let playerSelection;
let computerSelection;

//Save final winner in result.
let result;

// Counter for number of wins.
let playerCounter = 0;
let computerCounter = 0;
let drawCounter = 0;

// Real logic behind the game, function returns the Result.
function playRound(playerSelection, computerSelection) {

    if(computerSelection === "Rock") {
        if(playerSelection === "Scissor") {
            console.log("Computer Win!");
            computerCounter++;
        }
        else if(playerSelection === "Paper") {
            console.log("Player Win!");
            playerCounter++;
        }
        else {
            console.log("DRAW !");
            drawCounter++;
        }
    }

    else if(computerSelection === "Paper") {
        if(playerSelection === "Rock") {
            console.log("Computer Win!");
            computerCounter++;
        }
        else if(playerSelection === "Scissor") {
            console.log("Player Win!");
            playerCounter++;
        }
        else {
            console.log("DRAW !");
            drawCounter++;
        }
    }

    else {
        if(playerSelection === "Paper") {
            console.log("Computer Win!");
            computerCounter++;
        }
        else if(playerSelection === "Rock") {
            console.log("Player Win!");
            playerCounter++;
        }
        else {
            console.log("DRAW !");
            drawCounter++;
        }
    }

    console.log("");
}

// Create a game for 5 round.
function game() {
    for(let round = 1; round<=5; round++) {
        // Save corrected input in playerSelection variable by calling promptSelection() method.
        playerSelection = promptSelection();
        // Get computer selection from getComputerChoice() method.
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }

    // check winner
    if(playerCounter > computerCounter) {
        result = "Overall Winner Is :- Player";  
    } 
    
    else if(computerCounter > playerCounter) {
        result = "Overall Winner Is :- Computer";
    }

    else {
        result = "It's a Draw!";
    }

    // Result the final winner.
    console.log("Player Wins :- "+playerCounter+" | "+"Computer Wins :- "+computerCounter+" | "+"Total Draws :- "+drawCounter);
    console.log(result);
}

game();