function computerSelection () {
   let computersTurn = Math.floor((Math.random() * 3) + 1);

if (computersTurn === 1) {
    return "Rock";
} else if (computersTurn === 2) {
    return "Paper";
} else if (computersTurn === 3) {
    return "Scissors"
} 
}


function playRound (playerSelection, computerSelection) {
    
   let playerSelection1 = playerSelection[0].toUpperCase() + playerSelection.substring(1).toLowerCase();

    if (playerSelection1 === "Rock" && computerSelection === "Scissors") {
        return "You win Rock beats Scissors."
    } else if (playerSelection1 === "Rock" && computerSelection === "Paper") {
        return "You lose Paper beats Rock."
    } else if (playerSelection1 === "Rock" && computerSelection === "Rock") {
        return "It's a draw, you both picked Rock."
    } else if (playerSelection1=== "Paper" && computerSelection === "Scissors") {
        return "You lose. Scissors beat Paper."
    } else if (playerSelection1 === "Paper" && computerSelection === "Rock") {
        return "You win. Paper beats Rock."
    } else if (playerSelection1 === "Paper" && computerSelection === "Paper") {
        return "It's a draw, you both picked Paper."
    } else if (playerSelection1 === "Scissors" && computerSelection === "Scissors") {
        return "It's a draw. You both picked Scissors."
    } else if (playerSelection1 === "Scissors" && computerSelection === "Paper") {
        return "You win. Scissors beat Paper."
    } else if (playerSelection1 === "Scissors" && computerSelection === "Rock") {
        return "You lose. Rock beats Scissors."
    }   
}

