// Constants
const MAX_COLOR_CODE = 4;
const MAX_COLOR_CODE_OVER_INDEX = 5
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
function startGame() {
    secretCode = createSecretCode();
    console.log("Secret code: " + secretCode);
}

// Create secret code function
function createSecretCode() {
    let code = [];
    for (let i = 0; i < GUESS_SIZE; i++) {
        code.push(getRandomInt(1, MAX_COLOR_CODE_OVER_INDEX));
    }
    return code;
}

// Get random numbers helper function
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Start Guess Round
function startGuessRound() {
    userGuessArray = getUserGuesses();
    checkGuess();

    pictureNames = getUserColorPictures();
    addGuessRow();
    addFeedbackRow();

    checkWin();
}

// Get user guesses
function getUserGuesses() {
    let guesses = [];
    for (let i = 0; i < GUESS_SIZE; i++) {
        guesses.push(promptUser(i));
    }
    return guesses;
}

// Prompt for user input
function promptUser(index) {
    let guess;
    do {
        guess = parseInt(prompt(PROMPT_MESSAGE + (index + 1)));
    } while (isNaN(guess) || guess < 1 || guess > MAX_COLOR_CODE);
    return guess;
}

// Check user guess against secret code
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

// Get user color pictures
function getUserColorPictures() {
    return userGuessArray.map(guess => `picture${guess}.png`);
}

// Function to add a guess row to the table
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

// Function to add a feedback row to the table
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

// Check if user has won
function checkWin() {
    if (correctAnswers === GUESS_SIZE) {
        winMessage();
    }
}

// Display winning message
function winMessage() {
    alert("YOU WIN! Press F5 to play again");
}

// Initialize game on load
startGame();
