/*
rock = 0;
paper = 1;
scissors = 2;

horrific code practices going on here!
*/

function getComputerChoice(){ //return values from 0 to 2
    return Math.floor(Math.random() * 3);
}

function getUserChoice(){
    let choice = prompt("Type in your choice: rock, paper or scissors");
    choice = choice.toLowerCase();
    if(choice === "rock") return 0;
    else if(choice === "paper") return 1;
    else if(choice === "scissors") return 2;
    else{
        window.alert("Unknown input.");
        return -1;
    }
}

function returnString(x){
    if(x == 0) return "rock";
    if(x == 1) return "paper";
    if(x == 2) return "scissors";
}

let cpuScore = 0;
let userScore = 0;

function theGame(){
    let cpu = getComputerChoice();
    let user = -1;
    while(user === -1){ //the game WILL NOT RUN until the player provides a valid input. 
        user = getUserChoice()
    }
    window.alert(`Computer chose ${returnString(cpu)}`);
    if (cpu === user){
        window.alert("It's a tie!");
    }

    //user chose rock
    if(user === 0 && cpu === 1){
        window.alert("Paper beats rock.");
        cpuScore++;
    }
    if(user === 0 && cpu === 2){
        window.alert("Rock beats scissors.");
        userScore++;
    }

    //user chose paper
    if(user === 1 && cpu === 2){
        window.alert("Scissors beat paper.");
        cpuScore++;
    }
    if(user === 1 && cpu === 0){
        window.alert("Paper beats rock.");
        userScore++;
    }

    //user chose scissors
    if(user === 2 && cpu === 0){
        window.alert("Rock beats scissors.");
        cpuScore++;
    }
    if(user === 2 && cpu === 1){
        window.alert("Scissors beats paper.");
        userScore++;
    }
}

function actuallyThisIsTheActualGame(){
    let n = prompt("Type in the amount of rounds");
    n = parseInt(n);

    for(let i = 0; i < n; i++){
        theGame();
    }
    if(n !== 0){
        if(cpuScore == userScore){
            window.alert(`Final Score:\nComputer: ${cpuScore}\nYou, the player: ${userScore}\nTie!`);
        } else if(cpuScore > userScore){
            window.alert(`Final Score:\nComputer: ${cpuScore}\nYou, the player: ${userScore}\nThe Computer won.`);
        } else{
            window.alert(`Final Score:\nComputer: ${cpuScore}\nYou, the player: ${userScore}\nYou, the player, won.`);
        }
    }
}

let replay = 1;

while(replay === 1){
    actuallyThisIsTheActualGame()
    replay = -1; //idk about this. to prevent user from inputing an invalid... input
    while(replay == -1){
        replay = prompt("Wanna replay?\nType in yes or no:");
        replay = replay.toLowerCase();
        if(replay === "yes") replay = 1;
        else if(replay === "no") replay = 0;
        else if(replay === "not really"){
            window.alert("Ok... bye!\n");
        }
        else replay = -1;
    }
}