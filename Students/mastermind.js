// Constants
// Define constants like MAX_COLOR_CODE, GUESS_SIZE, PROMPT_MESSAGE etc...



// Global Variables
// Declare global variables secretCode, userGuessArray, totalScore, correctAnswers, pictureNames, checkGuessResult




// Start Game
// Initialize the game by generating the secret code and storing it in the 'secretCode' variable
// Use console.log to print the secret code for debugging purposes




// Function: getRandomInt(min, max)
// Write a function that generates a random integer between 'min' (inclusive) and 'max' (exclusive)



// Function: createSecretCode()
// Write a function to create the secret code for the game
// The function should return an array of random numbers, each between 1 and 4



// Function: promptUser(index)
// Write a function to prompt the user for their guess for a given color
// The function should validate the input to ensure it's a number between 1 and 4



// Function: getUserGuesses()
// Write a function to get all user guesses for a round
// The function should call promptUser for each guess in the round and return an array of guesses



// Function: checkGuess()
// Write a function to check the user's guess against the secret code
// The function should reset the round's score and check each guess, updating totalScore and correctAnswers




// Function: getUserColorPictures()
// Write a function to get the filenames of images based on user guesses
// The function should map each guess to the corresponding image filename



// Function: checkWin()
// Write a function to check if the user has won the game
// The function should display a win message if the user guesses all colors correctly


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