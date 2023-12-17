//start game//

//ask computer to pick a code
let secretCode = [];
createSecretCode();
console.log("secret code "+ secretCode); 


//user guess
let userGuessArray = [];


//Guessing round //
let colorGuessesNum = 0;
let correctAnswers = 0;
let pictureNames = [];


function startGuessRound(){

	//ask user for numbers
	userGuess();

	//check guess
	colorGuessesNum = 0; //correct color
	correctAnswers = 0; //correct color and position
	let checkGuessResult = [];
	checkGuess();

	// show on screen //
	//pick user guess color-pictures
	pictureNames = [];
	userColorPictures();

	//add row with user color-guess and number of right color guesses
	addGuessRow();

	//add row with the computer feedback
	addFeedbackRow();

	//check win
	checkWin();
}

////////// functions //////////////

//create secret code function
function createSecretCode(){
    for (let i = 0; i < 4; i++) {
        secretCode.push(getRandomInt(1, 5));
    }
}


//get random numbers help function
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function userGuess(){
	userGuessArray = [];
	
	for (let g = 0; g < 4; g++){
		userGuessArray.push(promptUser()); 
	}
	console.log("user guess "+ userGuessArray);
}

//prompt for user help-function
function promptUser(){
	return parseInt(prompt("Please enter the first number"));
}

//check guess
function checkGuess() {
	checkGuessResult = [];
	for (let i = 0; i < 4; i++) {
		if (userGuessArray[i] === secretCode[i]) {
			checkGuessResult.push(2);
			colorGuessesNum++;
			correctAnswers++;
		}
		else if (secretCode.indexOf(userGuessArray[i]) > -1) {
			checkGuessResult.push(1);
			colorGuessesNum++;
		}
		else {
			checkGuessResult.push(0);
		}
	}
	console.log("checkGuessResult " + checkGuessResult);
}


//pick user color-pictures
function userColorPictures(){
	
	for (let j = 0; j < 4; j++) {
		switch (userGuessArray[j]){
			case 1:
				pictureNames.push("picture1.png");
			break;
			case 2:
				pictureNames.push("picture2.png");
			break;
			case 3:
				pictureNames.push("picture3.png");
			break;
			case 4:
				pictureNames.push("picture4.png");
				break;
			default:
				pictureNames.push("picture1.png");
        break;
		}
	}
	
}


function addGuessRow(){
	//get table element
	let table = document.getElementById("guessBoard");
	//add row in the end of the table
	let row1 = table.insertRow(-1);
	//insert two cells
	let cell1 = row1.insertCell(0);
	let cell2 = row1.insertCell(1);
	cell2.rowSpan = 2;
	
	//add user's color guess
	cell1.innerHTML = `<div class="userGuess">
								<img class="colorExample" src=` + pictureNames[0] + `>
								<img class="colorExample" src=` + pictureNames[1] + `>
								<img class="colorExample" src=` + pictureNames[2] + `>
								<img class="colorExample" src=` + pictureNames[3] + `>
							</div>`;
	
	//insert the number of right color guesses
	cell2.innerHTML = `<div class="colorGuess">` + colorGuessesNum; + `
						</div>`
}

function addFeedbackRow(){
	//get table element
	let table = document.getElementById("guessBoard");
	//create second row
	let row2 = table.insertRow(-1);
	//create new cell
	let cell3 = row2.insertCell(0);
	//insert the feedback for user
	cell3.innerHTML = `<div class="userScore">
								<span class="userScoreNum">` + checkGuessResult[0] + `</span>
								<span class="userScoreNum">` + checkGuessResult[1] + `</span>
								<span class="userScoreNum">` + checkGuessResult[2] + `</span>
								<span class="userScoreNum">` + checkGuessResult[3] + `</span>
							</div>`;
}

function checkWin(){
	if( correctAnswers === 4){
		winMessage();
	}
}

function winMessage(){
	alert("YOU WIN! Press F5 to play again");
}