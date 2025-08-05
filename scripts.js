
function getComputerChoice(){
    let choices = ["rock","paper","scissors"];
    let randomindex = Math.floor(Math.random()*choices.length);
    return choices[randomindex];
}

function getHumanChoice(string){
    user = prompt("lets play rock,paper,or scissors");
    if(user==="rock"){
        return("rock");
    }else if (user === "paper"){
        return("paper")
    }else if(user === "scissors"){
        return("scissors")
    }else{
        return("not valid")

    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return("It's a Tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return("You Win!");
    } else {
        return("Computer Wins!");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(playRound(humanSelection,computerSelection));

