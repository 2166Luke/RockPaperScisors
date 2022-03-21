
/*function for getting a random number between 1-3*/

//function getRandom(min,max) {
//    return Math.floor((Math.random()*(max - min))+min)
//}
/*function for the computer's choice of play*/

function computerPlay() {
    const result = Math.floor((Math.random()*(4 - 1))+1);
    if (result == 1) {return "rock";}
    else if (result == 2) {return "paper";}
    else if (result == 3) {return "scissors";}
    else {return "Something Went Wrong"}
}



