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

