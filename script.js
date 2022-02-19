const results = document.getElementById('results');
const score = document.getElementById('score');

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
    const para = document.createElement('p');
    para.textContent = `You selected ${playerSelection}.`;
    results.appendChild(para);

    // Create a conditional statement to check  whether Player or Computer has won depending on input
    //- and then return a string that declares the winner of the round like so: 
    // "You lose! Paper beats Rock"
    // "You tie! Rock can't beat Rock"
    // "You win! Scissors lose to Rock"
    if (playerSelection === 'Rock' && computerSelection === 'Scissors' || playerSelection === "Paper" && computerSelection === "Rock" || 
    playerSelection === 'Scissors' && computerSelection === 'Paper') return `You win this round! ${computerSelection} lose to ${playerSelection}.`;
    else if (playerSelection === 'Rock' && computerSelection === 'Paper' || playerSelection === "Paper" && computerSelection === "Scissors" || 
    playerSelection === 'Scissors' && computerSelection === 'Rock') return `You lose this round! ${computerSelection} beats ${playerSelection}.`;
    else return `This round is a tie. ${computerSelection} can't beat ${playerSelection}.`;
}

// console.log(game());

// Create a function that is run when the game is ending()
function gameEnd() {
    // At the end of the loop, report a winner
    if (scoreHuman > scoreComputer) {
        alert("HUMANS WIN")
    } else if (scoreComputer > scoreHuman) {
        alert("COMPUTERS DOMINATE")
    } else {
        alert('THIS GAME WAS A TIE')
    }
    // Set score counters to zero
    scoreHuman = 0;
    scoreComputer = 0;
    score.textContent = "0 : 0";
    results.innerHTML = '';
}

// Add an event listener to the buttons that call your playRound function with the correct 
//     playerSelection every time a button is clicked. (you can keep the console.logs for this step)
const buttons = document.getElementsByTagName('button');
for (let item of buttons) {
    item.addEventListener('click', () => {
        let resultString = playRound(item.id,computerPlay());
        const para = document.createElement('p');
        para.textContent = resultString;
        results.appendChild(para);
        if(resultString.includes('You win')) scoreHuman += 1;
        else if (resultString.includes('You lose')) scoreComputer += 1;
        score.textContent = `${scoreHuman} : ${scoreComputer}`;
        // added a setTimeout because the alert was displayed before the DOM Content changed.
        if(scoreHuman === 5 || scoreComputer === 5) setTimeout(gameEnd, 0);
    })
}

// Display the running score, and announce a winner of the game once one player reaches 5 points.
let scoreComputer = 0;
let scoreHuman = 0;