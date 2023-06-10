//global variables///////////////////////////////
var timeLeft = 80;
var penalty = 5;
var answerTextDelay = 1;
var highScoreName = "";
var highScoreList = [];

//element selectors///////////////////////////////
var timerDisplay;
var startButton;
var highscoresButton;
var resetScoreButton;
var restartButton;
var answerButton;



//functions///////////////////////////////

//init///////////////////////////////

function initialize() {

}

//main quiz logic///////////////////////////////

function startQuiz() {

}

function endQuiz() {
    //display final text
    //display score (finaltime)
    //display button for highscores
    //display button for retry
}

function correctAnswer() {
    //display text correct
    //load next question - render question
}

function wrongAnswer() {
    time = time - penalty;
    //display text incorrect
}

function generateQuestions() {

}



//timers///////////////////////////////

function startQuizTimer() {
    var timer = setInterval(() => {
            timeLeft--;
            
            if (timeLeft===0) {
                clearInterval(timer);
            }
    }, 1000);
}

function answerTextDelayTimer() {
    var timer = setInterval(() => {
        if (answerTextDelay === 0) {
            clearInterval(timer);
        }
    }, 1000);
}

//save retrieve local data///////////////////////////////

function saveHighscore() {

    highScoreEntry.saveName = highScoreName.value;
    highScoreEntry.score = timeLeft;
    localStorage.setItem("highScoreList", JSON.stringify(highScoreList));
}

//render elements///////////////////////////////

function renderHighscoreScreen() {
    //clear screen
    
}

function renderQuestion() {

}

function clearScreen() {

}

//event listeners///////////////////////////////

startButton.addEventListener("click");
highscoresButton.addEventListener("click");
resetScoreButton.addEventListener("click");
restartButton.addEventListener("click");
answerButton.addEventListener("click");
highScoreName.addEventListener("submit");

//data///////////////////////////////

var questionData1 = {
    question: "question text",
    correctAnswer: "correct text",
    wrongAnswer: ["wrong text1","wrong text2","wrong text3"]
}

var questionData2 = {
    question: "question text",
    correctAnswer: "correct text",
    wrongAnswer: ["wrong text1","wrong text2","wrong text3"]
}

var questionData3 = {
    question: "question text",
    correctAnswer: "correct text",
    wrongAnswer: ["wrong text1","wrong text2","wrong text3"]
}

var questionData4 = {
    question: "question text",
    correctAnswer: "correct text",
    wrongAnswer: ["wrong text1","wrong text2","wrong text3"]
}

var highScoreEntry = {
    saveName: highScoreName,
    score: timeLeft
}

