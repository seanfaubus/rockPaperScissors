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
    let rounds = 1;
    let wins = 0;
    let losses = 0;
    let draws = 0;
    // getting user and computer's play for the round...
    // while loop to loop through 5 rounds..
    while (rounds <= 5) {
        let computerChoice = computerPlay();
        let playerChoice = userPlay();
        let winner = playRound(playerChoice, computerChoice);
        if (winner === 'You lose!') {
            console.log("Round: " + rounds);
            losses += 1;
            console.log(winner);
            // console.log("Round: " + rounds);
        } else if (winner === 'You win!') {
            console.log("Round: " + rounds);
            wins += 1;
            console.log(winner);
            // console.log("Round: " + rounds);
        } else {
            console.log("Round: " + rounds);
            draws += 1;
            console.log(winner);
            // console.log("Round: " + rounds);
        }
        rounds++;
    }
    
    /* determining the winner after 5 rounds*/
    if (wins >= losses && wins >= draws) {
        return ('You are the winner!');
    } else if (losses > wins && losses > draws) {
        return ('You lost. Try again!');
    } else if (draws > wins && draws > losses) {
        return ('Weird. You draw too much');
    }
        
}
// game will cycle through rps 5 times and declare the winner
// if you win as much or more than you draw or lose, you WIN!!
console.log(game());

// creating a function that asks if player wants to play again
function playAgain() {
    let answer = prompt("Would you like to play again? Y/N?").toLowerCase();
    while (answer !== 'y' && answer !== 'n') {
        answer = prompt("Would you like to play again? Y/N?").toLowerCase();
        console.log("Please enter 'Y' or 'N'");
    }
    if (answer === 'y') {
        console.log('Let\'s play!');
        console.log(game());
    } else {
        //pass 
    }
}

console.log(playAgain());