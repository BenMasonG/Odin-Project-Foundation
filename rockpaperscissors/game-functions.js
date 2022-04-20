function computerPlay () {
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
    } else
    return "You lose. You did not play rock, paper or scissors."  
}

function playerPlay () {
    let playersTurn = prompt("Play Rock, Paper or Scissors");
    return playersTurn
}

function playGame () {
    let game = playRound(playerPlay(), computerPlay());
    return game
}

let results = new Array (0);

function bestOfFive() {
    results.splice(0, results.length)
    for (let i = 0; i < 5; i++) {
        let game2 = playGame ()
        results.push(game2)
        console.log(game2)
    }
}

let wins = new Array (0);
let numberOfWins = new Array (0);

function findWins () {
    wins.splice(0, results.length)
    numberOfWins.splice(0, results.length)
    for (let i = 0; i < results.length; i++)
    wins.push(results[i].split("win").length - 1)
    numberOfWins.push(wins.filter(Boolean));
}

let loses = new Array (0);
let numberOfLoses = new Array (0);

function findLoses () {
    loses.splice(0, results.length)
    numberOfLoses.splice(0, results.length)
    for (let i = 0; i < results.length; i++)
    loses.push(results[i].split("lose").length - 1)
    numberOfLoses.push(loses.filter(Boolean));
}

let draws = new Array (0);
let numberOfDraws = new Array (0);

function findDraws () {
    draws.splice(0, results.length)
    numberOfDraws.splice(0, results.length)
    for (let i = 0; i < results.length; i++)
    draws.push(results[i].split("draw").length - 1)
    numberOfDraws.push(draws.filter(Boolean)); 
}

/* let numberOfWins = wins.filter(Boolean);
let numberOfLoses = loses.filter(Boolean);
let numberOfDraws = draws.filter (Boolean); */
