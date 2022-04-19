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


function playRound (playerSlection, computerSelection) {
    if (playerSlection === "Rock" && computerSelection === "Scissors") {
        return "You win Rock beats Scissors."
    } else if (playerSlection === "Rock" && computerSelection === "Paper") {
        return "You lose Paper beats Rock."
    } else if (playerSlection === "Rock" && computerSelection === "Rock") {
        return "It's a draw, you both picked Rock."
    } else if (playerSlection === "Paper" && computerSelection === "Scissors") {
        return "You lose. Scissors beat Paper."
    } else if (playerSlection === "Paper" && computerSelection === "Rock") {
        return "You win. Paper beats Rock."
    } else if (playerSlection === "Paper" && computerSelection === "Paper") {
        return "It's a draw, you both picked Paper."
    } else if (playerSlection === "Scissors" && computerSelection === "Scissors") {
        return "It's a draw. You both picked Scissors."
    } else if (playerSlection === "Scissors" && computerSelection === "Paper") {
        return "You win. Scissors beat Paper."
    } else if (playerSlection === "Scissors" && computerSelection === "Rock") {
        return "You lose. Rock beats Scissors."
    }   
}