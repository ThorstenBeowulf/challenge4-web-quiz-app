//global variables
var timeLeft = 80;
var penalty = 5;
var answerTextDelay = 1;

//element selectors
var timerDisplay = getelement;
var startButton = getelement;
var 



//init

function initialize() {

}

//functions

function clearScreen() {

}

function gameOver() {
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

function startTimer() {
    var timer = setInterval(() => {
            timeLeft--;
            if (timeLeft===0) {
                clearInterval(timer);
            }
    }, 1000);
}

function saveHighscore() {
    //listener string highscorename, finaltime

}

function renderHighscore() {
    //clear screen

}

function renderQuestion() {

}

function onButtonClick() {

}

//data

var questionData = {
    question: "question text",
    correctAnswer: "correct text",
    wrongAnswer: ["wrong text1","wrong text2","wrong text3"]
}


