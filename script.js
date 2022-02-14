// Create a function called computerPlay

function computerPlay() {
    // Let the function computerPlay return either 'Rock', 'Paper', or 'Scissors'
    // We’ll use this function in the game to make the computer’s play
    let choice = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor((Math.random()*3));
    return choice[random];
}

// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - 
// the playerSelection and computerSelection 

function playRound(playerSelection, computerSelection) {
    // Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.replace(playerSelection.charAt(0),playerSelection.charAt(0).toUpperCase());
    // If user enters something completely different in prompt, say that the game is not counted
    if(!(playerSelection === 'Rock' || playerSelection === 'Paper' || playerSelection === 'Scissors')) return 'Wrong input by player. Round not counted.'
    console.log(playerSelection);

    // Create a conditional statement to check  whether Player or Computer has won depending on input
    //- and then return a string that declares the winner of the round like so: 
    // "You lose! Paper beats Rock"
    // "You tie! Rock can't beat Rock"
    // "You win! Scissors lose to Rock"
    if (playerSelection === 'Rock' && computerSelection === 'Scissors' || playerSelection === "Paper" && computerSelection === "Rock" || 
    playerSelection === 'Scissors' && computerSelection === 'Paper') return `You win! ${computerSelection} lose to ${playerSelection}.`;
    else if (playerSelection === 'Rock' && computerSelection === 'Paper' || playerSelection === "Paper" && computerSelection === "Scissors" || 
    playerSelection === 'Scissors' && computerSelection === 'Rock') return `You lose! ${computerSelection} beats ${playerSelection}.`;
    else return `It's a tie. ${computerSelection} can't beat ${playerSelection}.`;
}

console.log(game());

// Create a function game()
function game() {
    // Create a variable to keep score
    let humanScore = 0;
    let computerScore = 0;

    // Create a loop, so that a 5 round game is played
    for(let i = 0; i<5; i++) {
        // Inside the loop call playRound()  so that a round is played
        // Use prompt() to get input from the user.
        let result = playRound(prompt('Please choose Rock, Paper, or Scissors'),computerPlay());
        console.log(result);
        if(result.includes('You win')) humanScore += 1;
        else if (result.includes('You lose')) computerScore += 1;
    }

    // At the end of the loop, report a winner, maybe return or console.log
    if (humanScore > computerScore) {
        return "HUMANS WIN"
    } else if (computerScore > humanScore) {
        return "COMPUTERS DOMINATE"
    } else {
        return 'THIS GAME WAS A TIE'
    }

}
