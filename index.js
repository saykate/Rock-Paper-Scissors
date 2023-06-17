let roundCount = 0;
let playerScore = 0; 
let compScore = 0; 

while (roundCount < 5) {

//get Player's bet:
let playerInput = prompt("Enter your choice: rock, paper or scissors").toLowerCase();

//make sure that they enter a valid choice:
while (playerInput !== "rock" && playerInput !== "paper" && playerInput !== "scissors") {
    playerInput = prompt("Enter your choice: rock, paper or scissors")
};

console.log(playerInput);

//get Computer's bet:
let compRandom = Math.floor((Math.random() * 3) + 1)

console.log(compRandom);

//convert random number into a valid choice:
let compBet = () => {
if (compRandom === 1) {
    return "rock"
} else if (compRandom === 2) {
    return "paper"
} else  {
    return "scissors"
}
}
console.log(compBet());

//play round:
let playRound = (player, computer) => {
    if (player === computer) {
        compScore++;
        playerScore++;
        return "Tie";
    } else if (player === "rock" && computer === "scissors") {
        playerScore++;
        return "You win! Rock beats scissors."
    } else if (player === "rock" && computer === "paper") {
        compScore++;
        return "You lose. Paper beats rock."
    } else if (player === "paper" && computer === "scissors") {
        compScore++;
        return "You lose. Scissors beats paper."
    } else if (player === "paper" && computer === "rock") {
        playerScore++;
        return "You win! Paper beats rock."
    } else if (player === "scissors" && computer === "paper") {
        playerScore++;
        return "You win! Scissors beats paper."
    } else if (player === "scissors" && computer === "rock") {
        compScore++;
        return "You lose. Rock beats scissors."
    }
}
roundCount++;

console.log(playRound(playerInput, compBet()));
console.log(playerScore);
console.log(compScore);
console.log(roundCount);
}









