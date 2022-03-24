/*function for the computer's choice of play*/
let playerScore = 0;
let pcScore = 0;

function computerPlay() {
    let result = Math.floor((Math.random()*(4 - 1))+1);
    if (result == 1) {return "rock";}
    else if (result == 2) {return "paper";}
    else if (result == 3) {return "scissors";}
    else {return "Something Went Wrong";}
}


const btn1 = document.querySelector('.rock');
btn1.addEventListener('click', function(){
    computerPlay();
    playRound("rock");
    if (playerScore > 1 && results.firstChild) {
        results.removeChild(results.firstChild);
    } else if (pcScore > 1 && results.firstChild) {
        results.removeChild(results.firstChild);
    }else if (playerScore === pcScore && results.firstChild) {
        results.removeChild(results.firstChild);
    }
});

const btn2 = document.querySelector('.scissors');
btn2.addEventListener('click', function(){
    computerPlay();
    playRound("scissors");
});

const btn3 = document.querySelector('.paper');
btn3.addEventListener('click', function(){
    computerPlay();
    playRound("paper");
});

const results = document.querySelector('.results')

/*function to play a round of Rock Paper Scissors*/
function playRound(playerSelection) {
    let computerSelection = computerPlay();
    if (playerSelection == computerSelection) {results.appendChild(draw);}
    else if(playerSelection == "rock" && computerSelection == "scissors"){results.appendChild(rockWin); playerScore ++;}
    else if(playerSelection == "paper" && computerSelection == "rock"){results.appendChild(paperWin); playerScore ++;}
    else if(playerSelection == "scissors" && computerSelection == "paper"){results.appendChild(scissorsWin); playerScore ++;}
    else if(computerSelection == "rock" && playerSelection == "scissors"){results.appendChild(scissorsLoss); pcScore ++;}
    else if(computerSelection == "paper" && playerSelection == "rock"){results.appendChild(rockLoss); pcScore ++;}
    else if(computerSelection == "scissors" && playerSelection == "paper"){results.appendChild(paperLoss); pcScore ++;}
    countScore();
    }


const draw = document.createElement('p');
draw.textContent = "It was a draw."
draw.setAttribute('class','result')

//losing results
const rockLoss = document.createElement('p');
rockLoss.textContent = "The computer's paper won.";
rockLoss.setAttribute('class','result')

const scissorsLoss = document.createElement('p');
scissorsLoss.textContent = "The computer's rock won.";
scissorsLoss.setAttribute('class','result')

const paperLoss = document.createElement('p');
paperLoss.textContent = "The computer's scissors won";
paperLoss.setAttribute('class','result')
//-----------------------

//winning results
const rockWin = document.createElement('p');
rockWin.textContent = "You crushed the computer's scissors.";
rockWin.setAttribute('class','result')

const scissorsWin = document.createElement('p');
scissorsWin.textContent = "You shredded the computer's papers.";
scissorsWin.setAttribute('class','result')

const paperWin = document.createElement('p');
paperWin.textContent = "The computer's rock is a wrap.";
paperWin.setAttribute('class', 'result')
// -----------------------

const playerScoreBox = document.querySelector('.playerScore');
const pcScoreBox = document.querySelector('.pcScore')

const playerScoreLog = document.createElement('p');
playerScoreBox.appendChild(playerScoreLog);

const pcScoreLog = document.createElement('p');
pcScoreBox.appendChild(pcScoreLog);

const countScore = function() {
    playerScoreBox.innerText = `You: ${playerScore}`;
    pcScoreLog.innerText = `Computer: ${pcScore}`;
    //if (playerScore === 5 || pcScore === 5) {
    //    setTimeout(() => finishGame(humanScore,computerScore) ,200)
    //}
}