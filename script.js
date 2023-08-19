let choiceNames = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    console.log(choiceNames[(Math.floor(Math.random() * choiceNames.length))]);
}