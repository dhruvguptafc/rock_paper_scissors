let choices = ["rock","paper","scissors"];

function getComputerChoice(){
    let randomindex = Math.floor(Math.random()*choices.length);
    return choices[randomindex];
}

console.log(getComputerChoice());



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
console.log(getHumanChoice());
