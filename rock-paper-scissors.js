// Decide which handsign will computer play randomly
function computerPlay() {
    let plays = ['rock', 'paper', 'scissors'];
    let play = plays[Math.floor(Math.random() * plays.length)];
    return play;
}

// Print the result and end the game if someone wins 5 rounds
function checkWinner() {
    playerScore = score['player'];
    comScore = score['com'];
    if (playerScore === 5) {
        result.textContent = `You win, congratz! | Final Result - Player: ${playerScore}, Computer: ${comScore}`;
        playBtns.forEach((btn) => btn.removeEventListener('click', playRound));
    } else if (comScore === 5) {
        result.textContent = `Sorry, you lose. | Final Result - Player: ${playerScore}, Computer: ${comScore}`;
        playBtns.forEach((btn) => btn.removeEventListener('click', playRound));
    }
}

// Play 1 round of rock-paper-scissors game
function playRound(event) {
    // Store com and player's play
    const computerSelection = computerPlay();
    playerSelection = event.target.id;
    // Pre-defined text for result
    const even = 'No one win or lose, You two have same play!';
    const winMessage = 'You win, ';
    const loseMessage = 'You lose, ';
    const rockWin = 'Rock beats Scissors';
    const paperWin = 'Paper beats Rock';
    const scissorsWin = 'Scissors beats Paper';
    let message = '';
    
    // Check and give score to winner, then shows the result text
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            message = even;
        } else if (computerSelection === 'paper'){
            message = loseMessage + paperWin;
            score['com']++;
        } else {
            message = winMessage + rockWin;
            score['player']++;
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            message = winMessage + paperWin;
            score['player']++;
        } else if (computerSelection === 'paper') {
            message = even;
        } else {
            message = loseMessage + scissorsWin;
            score['com']++;
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            message = loseMessage + rockWin;
            score['com']++;
        } else if (computerSelection === 'paper') {
            message = winMessage + scissorsWin;
            score['player']++;
        } else {
            message = even;
        }
    } else {
        message = "Input is not valid!";
    }
    message += ` - Player: ${score['player']}, Computer: ${score['com']}`;
    result.textContent = message;

    // Print the result and end the game if someone wins 5 rounds
    checkWinner();
}

// Play rock-paper-scissors game until someone wins 5 rounds
function game() {
    
    // play 1 round of the game each time player clicked on a button
    playBtns.forEach((btn) => {
        btn.addEventListener('click', playRound);
    });  
}

// Global variables for the game
const score = {player: 0, com: 0};
let playerSelection;
let playerScore;
let comScore;

// Select nodes we need for the game
const playBtns = document.querySelectorAll('button');
const result = document.querySelector('#result');

game();
