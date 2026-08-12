const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const targetNum = Math.floor(Math.random() * 10) + 1;

console.log('Guess a number between 1 and 10:');
console.log('i picked a number between 1 and 10. Can you guess it?');

function askQuestion() {
    rl.question('Enter your guess: ', (answer) => {
        const guess = parseInt(answer);
        if (guess === targetNum) {
            console.log('Congratulations! You guessed the correct number!');
            rl.close();
        } else if (guess < targetNum) {
            console.log('Too low! Try again.');
            askQuestion();
        } else if (guess > targetNum) {
            console.log('Too high! try again');
            askQuestion()
        } else {
            console.log('invlaid num')
            askQuestion()
        }
    });
}

askQuestion();