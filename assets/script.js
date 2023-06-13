//global variables///////////////////////////////

var timeLeft = 80;
var penalty = 5;
var answerTextDelay = 1;
var highScoreName = "";
var highScoreList = [];

var questions = [questionData1, questionData2, questionData3, questionData4];
var remainingQuestions = questions;

//element selectors///////////////////////////////

//display//
var mainForm = document.querySelector(".main-form");
var timerEl = document.querySelector(".timer");
var timerDisplay = document.querySelector("#timer-display");





//functions///////////////////////////////

//init///////////////////////////////

function initialize() {

    //reset variables
    timeLeft = 80;
    highScoreName = "";
    // remainingQuestions = questions;

    renderTimer();
    renderQuizIntro();
}

initialize();

//main quiz logic///////////////////////////////

function startQuiz() {
    // shuffle(remainingQuestions);
    // generateQuestion();
    startQuizTimer();

}

// function checkAnswer() {
//     // get element clicked on to determine if class is ".correct-answer" or ".wrong-answer"

//     if (answerIsCorrect){
//         correctAnswer();
//     } else {
//         wrongAnswer();
//     }
// }

// function correctAnswer() {
//     renderAnswer("Correct");
//     if (remainingQuestions > 0) {
//         generateQuestion();
//     } else {
//         renderQuizEnd();
//     }
// }

// function wrongAnswer() {
//     renderAnswer("Incorrect");
//     if (timeLeft > 0) {
//         time = time - penalty;

//     } else {
//         renderQuizEnd();
//     }
// }


// function generateQuestion() {

//         var nextQuestion = remainingQuestions.pop();
    
//         renderQuestion(nextQuestion);

// }

// function resetScores() {
//     highScoreList = [];
// }

// function restartQuiz() {
    
// }

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// function shuffle(unshuffled) {

//     let shuffled = unshuffled
//     .map(value => ({ value, sort: Math.random() }))
//     .sort((a, b) => a.sort - b.sort)
//     .map(({ value }) => value)
    
//     return shuffled;
// }

//timers///////////////////////////////

function startQuizTimer() {
    var timer = setInterval(() => {
        timeLeft--;
        renderTimer();
        if (timeLeft===0) {
            clearInterval(timer);
        }
    }, 1000);
}

// function answerTextDelayTimer() {
//     var timer = setInterval(() => {
//         answerTextDelay--;

//         if (answerTextDelay === 0) {
//             clearInterval(timer);
//         }
//     }, 1000);
// }

//save retrieve local data///////////////////////////////

function saveHighscore() {

    highScoreEntry.saveName = highScoreName.value;

    highScoreEntry.score = timeLeft;

    highScoreList.push(highScoreEntry);

    highScoreList.sort((a, b) => a.score - b.score);

    localStorage.setItem("highScoreList", JSON.stringify(highScoreList));
}

var highScoreEntry = {
    saveName: "",
    score: 0
}


//render elements///////////////////////////////

function renderQuizIntro() {
    clearScreen();

    var titleEl = document.createElement("h1");
    titleEl.textContent = "Java Quiz";
    mainForm.appendChild(titleEl);

    var descriptionEl = document.createElement("p");
    descriptionEl.textContent = "Test your javascript knowledge with this quiz all about javascript. You have a set time limit and time will be subtracted for wrong answers. Click start quiz when ready."
    mainForm.appendChild(descriptionEl);

    var startButtonEl = document.createElement("button");
    startButtonEl.textContent = "Start Quiz";
    mainForm.appendChild(startButtonEl);
    startButtonEl.addEventListener("click", startQuiz());
}

// function renderHighscoreScreen() {
//     clearScreen();
//     highscoresButton.setAttribute("style", "visibility: hidden")
//     timerEl.setAttribute("style", "visibility: hidden")
//     //retrieve highscore list from local storage
//     //create elements
//     //hide highscore button and timer
// }

function renderQuizEnd() {
    clearScreen();
    //final score = timeleft
}

// function renderQuestion(question) {
//     clearScreen();

//     var questionTextEl = document.createElement("ol");
//     questionTextEl.textContent = question.questionText;
    
//     mainForm.appendChild(questionTextEl);



//     // for (let index = 0; index < array.length; index++) {
//     //     const element = array[index];
        
//     // }
//     //create question
//     //shuffle answers
//     //
// }

function renderTimer() {
    timerEl.setAttribute("style", "visibility: visible");
    timerDisplay.textContent = timeLeft;
}

function clearScreen() {
    mainForm.innerHTML = "";
}


//user-input//
// var startButton = document.querySelector(".start-button");
var highScoreName = document.querySelector(".high-score-name")
var highscoresButton = document.querySelector(".highscores-button");
var resetScoreButton = document.querySelector(".reset-score-button");
var restartButton = document.querySelector(".restart-button");
var answerButton = document.querySelector(".answer-button");

//event listeners///////////////////////////////


highscoresButton.addEventListener("click", renderHighscoreScreen());
resetScoreButton.addEventListener("click", resetScores());//done
restartButton.addEventListener("click", initialize());
answerButton.addEventListener("click", checkAnswer()); 
highScoreName.addEventListener("submit", saveHighscore());

//data///////////////////////////////

var questionData1 = {
    questionText: "question text",
    correctAnswer: "correct text",
    wrongAnswer: ["wrong text1","wrong text2","wrong text3"]
}

var questionData2 = {
    questionText: "question text",
    correctAnswer: "correct text",
    wrongAnswer: ["wrong text1","wrong text2","wrong text3"]
}

var questionData3 = {
    questionText: "question text",
    correctAnswer: "correct text",
    wrongAnswer: ["wrong text1","wrong text2","wrong text3"]
}

var questionData4 = {
    questionText: "question text",
    correctAnswer: "correct text",
    wrongAnswer: ["wrong text1","wrong text2","wrong text3"]
}



