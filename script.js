function getComputerChoice() {
    let chance = Math.random();
    if(chance <= 1 / 3){
        return "rock";
    }
    else if(chance <= 2 / 3){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Choose your move (Rock, Paper, or Scissors): ");
    return choice;
}