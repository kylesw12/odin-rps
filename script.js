function getComputerChoice() {
    let chance = Math.random();
    if(chance <= 1 / 3){
        return "Rock";
    }
    else if(chance <= 2 / 3){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

// function getHumanChoice() {
//     let choice = prompt("Choose your move (Rock, Paper, or Scissors): ");
//     return choice;
// }
let humanScore = 0;
let computerScore = 0;
let round = document.querySelector('#round');
let score = document.querySelector('#scoreboard');
let game = document.querySelector('#game');
let cpu = document.querySelector('#cpu-option');

let rock = document.querySelector('#rock');
rock.addEventListener('click', () => playRound("rock", getComputerChoice()));

let paper = document.querySelector('#paper');
paper.addEventListener('click', () => playRound("paper", getComputerChoice()));

let scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => playRound("scissors", getComputerChoice()));





function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    game.textContent = "";
    
    if(humanChoice == computerChoice){
        cpu.textContent = `Computer Chose: ${computerChoice}`
        round.textContent = `Tie! You both chose ${humanChoice}`;
        displayScore(humanScore, computerScore);
    }
    else if (humanChoice == "rock" && computerChoice == "paper"){
        computerScore++;
        cpu.textContent = `Computer Chose: ${computerChoice}`
        round.textContent = "You Lose! Paper beats Rock";
        displayScore(humanScore, computerScore);
    }
    else if(humanChoice == "rock" && computerChoice == "scissors"){
        humanScore++;
        cpu.textContent = `Computer Chose: ${computerChoice}`
        round.textContent = "You Win! Rock beats Scissors";
        displayScore(humanScore, computerScore);
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        humanScore++;
        cpu.textContent = `Computer Chose: ${computerChoice}`
        round.textContent = "You Win! Paper beats Rock";
        displayScore(humanScore, computerScore);
    }
    else if(humanChoice == "paper" && computerChoice == "scissors"){
        computerScore++;
        cpu.textContent = `Computer Chose: ${computerChoice}`
        round.textContent = "You Lose! Scissors beats Paper";
        displayScore(humanScore, computerScore);
    }
    else if(humanChoice == "scissors" && computerChoice == "rock"){
        computerScore++;
        cpu.textContent = `Computer Chose: ${computerChoice}`
        round.textContent = "You Lose! Rock beats Scissors";
        displayScore(humanScore, computerScore);
    }
    else{
        humanScore++;
        cpu.textContent = `Computer Chose: ${computerChoice}`
        round.textContent = "You Win! Scissors beats Paper";
        displayScore(humanScore, computerScore);
    }

    if(humanScore == 5 || computerScore == 5){
        if(humanScore == 5){
            game.textContent="You won the game to 5! Congradulations! Scores have been reset."
        }
        else{
            game.textContent="You lost the game to 5. Scores have been reset."
        }
        computerScore = 0;
        humanScore = 0;
    }
}

function displayScore(humanScore, computerscore) {
    score.textContent = `Player Score: ${humanScore} \n Computer Score: ${computerScore}`;
}

// function playGame(){

//     for(let i = 0; i < 5; i++){
//         let humanSelection = getHumanChoice();
//         let computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
//         console.log(`Player Score: ${humanScore}`);
//         console.log(`Computer Score: ${computerScore}`);
//     }
//     if(computerScore > humanScore){
//         console.log("You Lose!!!");
//     }
//     else if(computerScore < humanScore){
//         console.log("You Win!!!");
//     }
//     else{
//         console.log("It's a Tie!!!");
//     }
// }

// playGame();

