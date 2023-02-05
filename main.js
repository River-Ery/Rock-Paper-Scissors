
const getUserChoice = function getUserChoice(userInput) {
    userInput = userInput.toLowerCase()
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
        return userInput
    } else {
        console.log('Error, please input a valid choice');
    }
};

const getComputerChoice = function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};


const determinWinner = function determinWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'The game is a tie';
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer Wins';
        } else {
            return 'User Wins';
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computer Wins';
        } else {
            return 'User Wins';
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer Wins';
        } else {
            return 'User Wins';
        }
    }

    if (userChoice = 'bomb') {
        return 'User wins no matter what'
    }
};

const playGame = function playGame() {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log('You picked: ' + userChoice);
    console.log('Computer picked: ' + computerChoice);
    console.log(determinWinner(userChoice, computerChoice));

};

playGame();
