let choices = ["rock","paper","scissors"];

function getComputerChoice(){
    let randomindex = Math.floor(Math.random()*choices.length);
    return choices[randomindex];
}

console.log(getComputerChoice());
