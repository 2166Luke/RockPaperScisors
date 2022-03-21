/*function for the computer's choice of play*/
function computerPlay() {
    const result = Math.floor((Math.random()*(4 - 1))+1);
    if (result == 1) {return "rock";}
    else if (result == 2) {return "paper";}
    else if (result == 3) {return "scissors";}
    else {return "Something Went Wrong";}
}

/*function for the player's choice of play*/
let playerInput = prompt("Choose your play.");

function playersPlay(playerInput) {
    const outcome = playerInput.toLowerCase();
    return outcome;
}

/*function to play a round of Rock Paper Scissors*/
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {console.log("It was a draw");}
    else if(playerSelection == "rock" && computerSelection == "scissors"){console.log("You beat the computers rock!");}
    else if(playerSelection == "paper" && computerSelection == "rock"){console.log("You beat the computer's rock!");}
    else if(playerSelection == "scissors" && computerSelection == "paper"){console.log("You beat the computer's paper!");}
    else if(computerSelection == "rock" && playerSelection == "scissors"){console.log("You Lose! Rock beats scissors.");}
    else if(computerSelection == "paper" && playerSelection == "rock"){console.log("You Lose! Paper beats rock.");}
    else if(computerSelection == "scissors" && playerSelection == "paper"){console.log("You Lose! Scissors beats paper.");}
}

/*function to play five rounds in a row*/
function game(){
    for (let i = 0; i < 5; i++){
        const computerSelection = computerPlay();
        const playerSelection = playersPlay(playerInput);
        var round = playRound(playerSelection, computerSelection);
        console.log(round);
    }
}

game();