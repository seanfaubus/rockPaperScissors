console.log('Hello World!');

// starting rock paper scissors
// creating a function to to determine the move of the computer

function computerPlay() {
    let play = Math.floor(Math.random() * 3) + 1;
    if (play == 1) {
        play = 'rock';
    } else if (play == 2) {
        play = 'paper';
    } else {
        play = 'scissors';
    }
    return play;
}

// computer's choice
const computerChoice = computerPlay();

// player's turn to decide!
function userPlay() {
    let choice = prompt("Rock, paper, or scissors?").toLowerCase();
    while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
        choice = prompt("Rock, paper, or scissors?").toLowerCase();
    }
    return choice;
    }  


const playerChoice = userPlay();

console.log(computerChoice);
console.log(playerChoice);

// function to play a game!
function playRound(user, computer) {
    if (user === 'rock' && computer === 'paper') {
        return('You lose!');
    } else if (user === 'rock' && computer === 'scissors') {
        return('You win!');
    } else if (user === 'rock' && computer === 'rock') {
        return('Draw!');
    } else if (user === 'paper' && computer === 'rock') {
        return('You win!');
    } else if (user === 'paper' && computer === 'scissors') {
        return('You lose!');
    } else if (user === 'paper' && computer === 'paper') {
        return('Draw!');
    } else if (user === 'scissors' && computer === 'paper') {
        return('You win!');
    } else if (user === 'scissors' && computer === 'scissors') {
        return('Draw!');
    } else if (user === 'scissors' && computer === 'rock') {
        return('You lose!');
    }
}

console.log(playRound(playerChoice, computerChoice));