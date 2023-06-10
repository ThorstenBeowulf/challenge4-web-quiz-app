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
    //create starting screen elements
    //
}

initialize();

//main quiz logic///////////////////////////////

function startQuiz() {

}

function endQuiz() {
    //display final text
    //display score (finaltime)
    //display button for highscores
    //display button for retry
}

function checkAnswer() {
    if (answerIsCorrect){
        correctAnswer();
    } else {
        wrongAnswer();
    }
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
    //sort highscores
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
    
}

function renderHighscoreScreen() {
    //clear screen
    //retrieve highscore list from local storage
    //create elements

}

function renderQuestion() {

}

function clearScreen() {

}

//event listeners///////////////////////////////

startButton.addEventListener("click", startQuiz());
highscoresButton.addEventListener("click", renderHighscoreScreen());
resetScoreButton.addEventListener("click", resetScores());
restartButton.addEventListener("click", restartQuiz());
answerButton.addEventListener("click", checkAnswer()); 
highScoreName.addEventListener("submit", saveHighscore());

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

var questions = [questionData1, questionData2, questionData3, questionData4];

