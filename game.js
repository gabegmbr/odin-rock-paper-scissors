/*
rock = 0;
paper = 1;
scissors = 2;

horrific code practices going on here!
*/

function getComputerChoice(){ //return values from 0 to 2
    return Math.floor(Math.random() * 3);
}

function returnString(x){
    if(x == 0) return "rock";
    if(x == 1) return "paper";
    if(x == 2) return "scissors";
}

let cpuScore = 0;
let userScore = 0;

function playRound(user){
    let cpu = getComputerChoice();
    let choice = `Computer chose ${returnString(cpu)}.`;
    if (cpu === user){
        return "It's a tie!";
    }

    //user chose rock
    if(user === 0 && cpu === 1){
        cpuScore++;
        return choice + '\n Paper beats rock.\n Computer won.';
    }
    if(user === 0 && cpu === 2){
        userScore++;
        return choice + '\n Rock beats scissors.\n You won.';
    }

    //user chose paper
    if(user === 1 && cpu === 2){
        cpuScore++;
        return choice +'\n Scissors beat paper.\n Computer won.';
    }
    if(user === 1 && cpu === 0){
        userScore++;
        return choice +'\n Paper beats rock.\n You won.';
    }

    //user chose scissors
    if(user === 2 && cpu === 0){
        cpuScore++;
        return choice +'\n Rock beats scissors.\n Computer won.';
    }
    if(user === 2 && cpu === 1){
        userScore++;
        return choice + '\n Scissors beats paper.\n You won.';
    }
}



const container = document.querySelector("#ui");

const scoreDiv = document.createElement("div");
scoreDiv.classList.add("scorebar");
const cpuText = document.createElement("h1");
cpuText.textContent = `CPU: ${cpuScore}`;
const userText = document.createElement("h1");
userText.textContent = `Player: ${userScore}`;

scoreDiv.append(cpuText, userText);

function updateText(){
    cpuText.textContent = `CPU: ${cpuScore}`;
    userText.textContent = `Player: ${userScore}`;
}

const instructionText = document.createElement("h1");
instructionText.textContent = "press a button to play:";
instructionText.classList.add("header-text");

const roundResultText = document.createElement("p");
roundResultText.classList.add("result-text");

const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");
rockButton.textContent = "rock";
paperButton.textContent = "paper";
scissorsButton.textContent = "scissors";

function playGame(user){
    if (cpuScore < 5 && userScore < 5){
        roundText = playRound(user);
        roundResultText.textContent = roundText;
    } else if(cpuScore === 5){
        window.alert('Computer wins!');
        location.reload();
    } else {
        window.alert('You won!');
        location.reload();
    }
}

rockButton.addEventListener("click", () => {
    playGame(0);
    updateText();
});

paperButton.addEventListener("click", () => {
    playGame(1);
    updateText();
});

scissorsButton.addEventListener("click", () => {
    playGame(0);
    updateText();
});

container.append(scoreDiv, instructionText, rockButton, paperButton, scissorsButton, roundResultText);

