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

function getHumanChoice() {
    let choice = prompt("Choose your move (Rock, Paper, or Scissors): ");
    return choice;
}
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    
    if(humanChoice == computerChoice){
        console.log(`Tie! You both chose ${humanChoice}`);
    }
    else if (humanChoice == "rock" && computerChoice == "paper"){
        computerScore++;
        console.log("You Lose! Paper beats Rock");
    }
    else if(humanChoice == "rock" && computerChoice == "scissors"){
        humanScore++;
        console.log("You Win! Rock beats Scissors");
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        humanScore++;
        console.log("You Win! Paper beats Rock");
    }
    else if(humanChoice == "paper" && computerChoice == "scissors"){
        computerScore++;
        console.log("You Lose! Scissors beats Paper");
    }
    else if(humanChoice == "scissors" && computerChoice == "rock"){
        computerScore++;
        console.log("You Lose! Rock beats Scissors");
    }
    else{
        humanScore++;
        console.log("You Win! Scissors beats Paper");
    }
}

function playGame(){

    for(let i = 0; i < 5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Player Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
    }
    if(computerScore > humanScore){
        console.log("You Lose!!!");
    }
    else if(computerScore < humanScore){
        console.log("You Win!!!");
    }
    else{
        console.log("It's a Tie!!!");
    }
}

playGame();

