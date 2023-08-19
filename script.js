let choiceNames = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    console.log(choiceNames[(Math.floor(Math.random() * choiceNames.length))]);
}

const pSelection = prompt("Enter Your Selection");
const playerSelection = playerSelectionSpellCheck.charAt(0).toUpperCase() + playerSelectionSpellCheck.slice(1).toLowerCase();
