// Constants
const MAX_COLOR_CODE = 4;
const MIN_COLOR_CODE_RANDOM = 1
const MAX_COLOR_CODE_RANDOM = 5
const GUESS_SIZE = 4;
const PROMPT_MESSAGE = "Please enter the number for color ";

// Global Variables
let secretCode = [];
let userGuessArray = [];
let totalScore = 0;
let correctAnswers = 0;
let pictureNames = [];
let checkGuessResult = []; // Adding this to store the results of checkGuess

// Start Game
secretCode = createSecretCode(); // generate the secret code array and insert it to the secretCode variable
console.log("Secret code: " + secretCode); // log the code

// Create a function to generate a random number 1 - 4
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Create secret code generating function
function createSecretCode() {
    const code = [];
    for (let i = 0; i < GUESS_SIZE; i++) {
        code.push(getRandomInt(MIN_COLOR_CODE_RANDOM, MAX_COLOR_CODE_RANDOM));
    }
    return code;
}


// Create prompt for user input function with validations
function promptUser(index) {
    let guess;
    do {
        const colorNumber = index + 1
        guess = parseInt(prompt(PROMPT_MESSAGE + colorNumber));
    } while (isNaN(guess) || guess < 1 || guess > MAX_COLOR_CODE);
    return guess;
}

// Create get user guesses function
function getUserGuesses() {
    let guesses = [];
    for (let i = 0; i < GUESS_SIZE; i++) {
        guesses.push(promptUser(i));
    }
    return guesses;
}

// Create Check user guess against secret code function - this function will also reset the round
function checkGuess() {
    checkGuessResult = []; // Reset for new round
    totalScore = 0; // Reset for new round
    correctAnswers = 0; // Reset for new round

    for (let i = 0; i < GUESS_SIZE; i++) {
        if (userGuessArray[i] === secretCode[i]) {
            checkGuessResult.push(2);
            totalScore += 2;
            correctAnswers++;
        } else if (secretCode.includes(userGuessArray[i])) {
            checkGuessResult.push(1);
            totalScore++;
        } else {
            checkGuessResult.push(0);
        }
    }
}


// Create Get user color pictures function to return the colors that user entered in prompt
function getUserColorPictures() {
    // return userGuessArray.map(guess => `picture${guess}.png`); 

    const pictureFilenames = []; // Array to hold the filenames

    for (let i = 0; i < userGuessArray.length; i++) {
        let guess = userGuessArray[i];
        let filename;

        switch(guess) {
            case 1:
                filename = 'picture1.png';
                break;
            case 2:
                filename = 'picture2.png';
                break;
            case 3:
                filename = 'picture3.png';
                break;
            case 4:
                filename = 'picture4.png';
                break;
            default:
                filename = 'picture1.png'; // Default picture for unmatched cases
        }

        pictureFilenames.push(filename); // Add the determined filename to the array
    }

    return pictureFilenames; // Return the array of filenames
}


// Create Check if user has won function
function checkWin() {
    if (correctAnswers === GUESS_SIZE) {
        alert("YOU WIN! Press F5 to play again");
    }
}

// Create Start Guess Round function - the Button pressed function
function startGuessRound() {
    userGuessArray = getUserGuesses();
    checkGuess();

    pictureNames = getUserColorPictures();
    addGuessRow();
    addFeedbackRow();

    checkWin();
}

// Function to add a guess row to the table - Helper function that you need to use, it will create the colors guess and the total score UI
function addGuessRow() {
    let table = document.getElementById("guessBoard");
    let row = table.insertRow(-1);
    let cell = row.insertCell(0);

    let imgHTML = "";
    for (let i = 0; i < pictureNames.length; i++) {
        imgHTML += `<img class="colorExample" src="${pictureNames[i]}">`;
    }

    cell.innerHTML = `<div class="userGuess">${imgHTML}</div>`;

    let scoreCell = row.insertCell(1);
    scoreCell.rowSpan = 2;
    scoreCell.innerHTML = `<div class="colorGuess">${totalScore}</div>`;
}

// Function to add a feedback row to the table - Helper function that you need to use, it will create the the score for each color guessed UI
function addFeedbackRow() {
    let table = document.getElementById("guessBoard");
    let row = table.insertRow(-1);
    let cell = row.insertCell(0);

    let feedbackHTML = "";
    for (let i = 0; i < checkGuessResult.length; i++) {
        feedbackHTML += `<span class="userScoreNum">${checkGuessResult[i]}</span>`;
    }

    cell.innerHTML = `<div class="userScore">${feedbackHTML}</div>`;
}


