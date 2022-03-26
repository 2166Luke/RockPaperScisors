/*function for the computer's choice of play*/
function computerPlay() {
    let result = Math.floor((Math.random()*(4 - 1))+1);
    if (result == 1) {return "rock";}
    else if (result == 2) {return "paper";}
    else if (result == 3) {return "scissors";}
    else {return "Something Went Wrong";}
}

//Player choice button logic
const btn1 = document.querySelector('.rock');
btn1.addEventListener('click', function(){
    if(playerScore===5||pcScore===5) {
        finishGame();
    }else {
    computerPlay();
    playRound("rock");
    }
});
const btn2 = document.querySelector('.scissors');
btn2.addEventListener('click', function(){
    if(playerScore===5||pcScore===5) {
        finishGame()
    }else {
    computerPlay();
    playRound("scissors");
    }
});
const btn3 = document.querySelector('.paper');
btn3.addEventListener('click', function(){
    if(playerScore===5||pcScore===5) {
        finishGame()
    }else {
    computerPlay();
    playRound("paper");
    }
});

//set up for the div where the results will appear in the DOM
const results = document.querySelector('.results');
const resultMessage = document.createElement('p');
resultMessage.textContent = '';
results.appendChild(resultMessage);

/*function to play a round of Rock Paper Scissors*/
function playRound(playerSelection) {
    let computerSelection = computerPlay();
    if (playerSelection == computerSelection) {resultMessage.innerText = `${draw}`;}
    else if(playerSelection == "rock" && computerSelection == "scissors"){resultMessage.innerText = `${rockWin}`; playerScore ++; }
    else if(playerSelection == "paper" && computerSelection == "rock"){resultMessage.innerText = `${paperWin}`; playerScore ++;}
    else if(playerSelection == "scissors" && computerSelection == "paper"){resultMessage.innerText = `${scissorsWin}` ; playerScore ++;}
    else if(computerSelection == "rock" && playerSelection == "scissors"){resultMessage.innerText = `${scissorsLoss}` ; pcScore ++;}
    else if(computerSelection == "paper" && playerSelection == "rock"){resultMessage.innerText = `${rockLoss}` ; pcScore ++;}
    else if(computerSelection == "scissors" && playerSelection == "paper"){resultMessage.innerText = `${paperLoss}` ; pcScore ++;}
    countScore();

    }

//result values
const draw = "It was a draw.";
const rockLoss = "The computer's paper won.";
const scissorsLoss = "The computer's rock won.";
const paperLoss = "The computer's scissors won";
const rockWin = "You crushed the computer's scissors.";
const scissorsWin = "You shredded the computer's papers.";
const paperWin = "The computer's rock is a wrap.";
// -----------------------

//score data and set up
let playerScore = 0;
let pcScore = 0;

const playerScoreBox = document.querySelector('.playerScore');
const pcScoreBox = document.querySelector('.pcScore')
const playerScoreLog = document.createElement('p');
playerScoreBox.appendChild(playerScoreLog);
const pcScoreLog = document.createElement('p');
pcScoreBox.appendChild(pcScoreLog);

//function to end the game
const finishGame = function (playerScore, pcScore) {
    endScreen.classList.add('active');
    overlay.classList.add('active');
    if(pcScore > playerScore) {
        endResult.textContent = `Oh no. You lost ${playerScore}-${pcScore}. The computer victory is all your fault.`
    } else if (playerScore > pcScore){
        endResult.textContent = `Congratulations! You won ${playerScore}-${pcScore}. You are the new savior of the human race.`
    }
}

//function to count scores and check for winner
const countScore = function() {
    playerScoreBox.innerText = `You: ${playerScore}`;
    pcScoreLog.innerText = `Computer: ${pcScore}`;
    if (playerScore === 5 || pcScore === 5) {
        setTimeout(() => finishGame(playerScore,pcScore) ,200)
    }
}

playerScoreBox.innerText = `You: ${playerScore}`;
pcScoreLog.innerText = `Computer: ${pcScore}`;

const body = document.querySelector('body')
const endScreen = document.querySelector('#endScreen')
const endResult = document.createElement('p')
endScreen.appendChild(endResult);
const resetButton = document.createElement('button')
endScreen.appendChild(resetButton);
resetButton.textContent = 'Try Again?'
resetButton.classList.add
const overlay = document.querySelector('.overlay')


//function to reset the page so the game can be played again
resetButton.addEventListener ('click', function(){
    playerScore = 0;
    pcScore = 0;
    endScreen.classList.remove('active');
    overlay.classList.remove('active');
    overlay
    resultMessage.textContent = '';
    playerScoreBox.innerText = `You: ${playerScore}`;
    pcScoreLog.innerText = `Computer: ${pcScore}`;
});