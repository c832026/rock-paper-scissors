// Decide which handsign will computer play randomly
function computerPlay() {
    let plays = ['rock', 'paper', 'scissors'];
    let play = plays[Math.floor(Math.random() * plays.length)];
    return play;
}

// Play 1 round of rock-paper-scissors game
function playRound(score) {
    // Check the play from player and computer
    const playerSelection = prompt('Please input "Rock", "Paper" or "Scissors" to play the game!').toLowerCase();
    const computerSelection = computerPlay();
    // Default strings
    const even = 'No one win or lose, You two have same play!';
    const winMessage = 'You win, ';
    const loseMessage = 'You lose, ';
    const rockWin = 'Rock beats Scissors';
    const paperWin = 'Paper beats Rock';
    const scissorsWin = 'Scissors beats Paper';
    let message = '';
    
    // Check who's winning and return the result
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
    return(message);
}

// Play rock-paper-scissors game for 5 rounds
function game() {
    let score = {player: 0, com: 0};
    for (let i = 0; i < 5; i++) {
        console.log(playRound(score));
    }

    // Check the final winner and print result
    let playerScore = score['player'];
    let comScore = score['com'];
    if (playerScore > comScore) {
        console.log(`You win, congratz! | Final Result - Player: ${playerScore}, Computer: ${comScore}`);
    } else if (playerScore < comScore) {
        console.log(`Sorry, you lose. | Final Result - Player: ${playerScore}, Computer: ${comScore}`);
    } else {
        console.log(`The game ends in a tied! | Fianl Result - Player: ${playerScore}, Computer: ${comScore}`);
    }
}

game();