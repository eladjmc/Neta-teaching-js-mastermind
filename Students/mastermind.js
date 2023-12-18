// Constants
// Define constants like MAX_COLOR_CODE, GUESS_SIZE, PROMPT_MESSAGE etc...



// Global Variables
// Declare global variables secretCode, userGuessArray, totalScore, correctAnswers, pictureNames, checkGuessResult




// Start Game
// Initialize the game by generating the secret code and storing it in the 'secretCode' variable
// Use console.log to print the secret code for debugging purposes




// Function to generate a random number within a range
function getRandomInt(min, max) {
    // Step 1: Return a random integer between min (inclusive) and max (exclusive)
}

// Function to create a secret code
function createSecretCode() {
    // Step 1: Initialize an empty array named 'code'
    // Step 2: Use a loop to generate 4 random numbers and add them to the 'code' array
    // Step 3: Return the 'code' array
}

// Function to prompt user input with validation
function promptUser(index) {
    // Step 1: Initialize a variable 'guess'
    // Step 2: Use a loop to repeatedly prompt the user until a valid input is received
    // Step 3: Return the valid guess
}

// Function to get user guesses
function getUserGuesses() {
    // Step 1: Initialize an empty array named 'guesses'
    // Step 2: Use a loop to get 4 guesses from the user and add them to the 'guesses' array
    // Step 3: Return the 'guesses' array
}

// Function to check user guess against secret code
function checkGuess() {
    // Step 1: Reset checkGuessResult, totalScore, and correctAnswers for the new round
    // Step 2: Use a loop to compare each user guess with the secret code
    // Step 3: Update checkGuessResult, totalScore, and correctAnswers based on the comparison
}

// Function to get user color pictures based on guesses
function getUserColorPictures() {
    // Step 1: Initialize an empty array named 'pictureFilenames'
    // Step 2: Use a loop to iterate over userGuessArray
    // Step 3: Use a switch case inside the loop to determine the filename for each guess and add it to 'pictureFilenames'
    // Step 4: Return the 'pictureFilenames' array
}

// Function to check if the user has won the game
function checkWin() {
    // Step 1: Check if the number of correctAnswers equals 4 to determine a win
    // Step 2: Show a win alert message if the user wins
}

// Function to start a guess round
function startGuessRound() {
    // Step 1: Get user guesses and store them in userGuessArray
    // Step 2: Call checkGuess to evaluate the guesses
    // Step 3: Get picture filenames based on guesses and store them in pictureNames
    // Step 4: Update the game board by calling addGuessRow and addFeedbackRow

    // the helper functions will update the screen
    addGuessRow() 
    addFeedbackRow()

    // Step 5: Check if the user has won the game by calling checkWin
}


// Helper Functions - You need to use this function to display result to the screen. You don't need to change them.
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