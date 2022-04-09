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
// const computerChoice = computerPlay();

// player's turn to decide!
function userPlay() {
    let choice = prompt("Rock, paper, or scissors?").toLowerCase();
    while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
        choice = prompt("Rock, paper, or scissors?").toLowerCase();
    }
    return choice;
    }  


// const playerChoice = userPlay();

/* console.log(computerChoice);
console.log(playerChoice); */

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
// console.log(playRound(playerChoice, computerChoice));

// creating a game function that will consist of 5 rounds!

function game() {
    let rounds = 0;
    let wins = 0;
    let losses = 0;
    let draws = 0;
    // getting user and computer's play for the round...
    let computerChoice = computerPlay();
    let playerChoice = userPlay();
    // while loop to loop through 5 rounds..
    while (rounds < 5) {
        let winner = playRound(playerChoice, computerChoice);
        if (winner === 'You lose!') {
            losses += 1;
        } else if (winner === 'You win!') {
            wins += 1;
        } else {
            draws += 1;
        }
        rounds++;
        computerChoice = computerPlay();
        playerChoice = userPlay();
    }
    
    /* determining the winner after 5 rounds*/
        if (wins > losses && wins > draws) {
            return ('You are the winner!');
        } else if (losses > wins && losses > draws) {
            return ('You lost. Try again!');
        } else if (draws > wins && draws > losses) {
            return ('Weird. You draw too much');
        }
        
    }

console.log(game())