let roundCount = 0;
let playerScore = 0; 
let compScore = 0; 

let welcome = document.querySelector('div.welcome');
let welcomeH1 = document.querySelector('div.welcome h1');
let welcomePara = document.querySelector('div.welcome p');
let enterButton = document.querySelector('.welcome button');
let gamePage = document.querySelector('div.game-page');

let playerText = document.querySelector('div.player p');
let compText = document.querySelector('div.comp p');
let roundText = document.querySelector('div.round-count p');

playerText.textContent = `Your Score: 0`;
compText.textContent = `Computer's Score: 0`;
roundText.textContent = `Round Count:`;

gamePage.classList.add('hidden');

enterButton.addEventListener('click', () => {
   welcome.classList.add('hidden');
   gamePage.classList.remove('hidden');
});

//get Player's bet:
let playerInput = '';
let rock = document.querySelector("button.rock");
let paper = document.querySelector("button.paper");
let scissors = document.querySelector("button.scissors");

rock.addEventListener("click", () => {
   console.log("Player's Choice: ", playerInput = 'rock');
   startGame();
});
paper.addEventListener("click", () => {
    console.log("Player's Choice: ", playerInput = 'paper');
    startGame();
});
scissors.addEventListener("click", () => {
    console.log("Player's Choice: ", playerInput = 'scissors');
    startGame();
});

//get Computer's bet:
let compRandom = Math.floor((Math.random() * 3) + 1)

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

let resetGame = () => {
    welcome.classList.remove('hidden');
    welcomePara.classList.add('hidden')
    gamePage.classList.add('hidden');
    enterButton.textContent = 'Play Again?'
}

const startGame = () => {
//play round:
let playRound = (player, computer) => {
    if (player === computer) {
        compScore++;
        playerScore++;
        return "Tie"
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
};

let endOfGame = () => {
    if (playerScore > compScore) {
       welcomeH1.textContent = "GAME OVER. You win the game! You beat the computer!!! ";
    } else if (compScore > playerScore) {
        welcomeH1.textContent = "GAME OVER. Sorry, you lost the game!";
    } else {
        welcomeH1.textContent = "GAME OVER. It's a tie!";
    }
    playerScore = 0; 
    compScore = 0;
    roundCount = 0;
    resetGame();
};

playRound(playerInput, compBet());

roundCount++;

playerText.textContent = `Your Score: ${playerScore}`;
compText.textContent = `Computer's Score: ${compScore}`;
roundText.textContent = `Round Count: ${roundCount}`;

if (playerScore === 5 || compScore === 5) {
    return endOfGame();
    }
}









