//data///////////////////////////////

var questionData1 = {
    questionText: "question text1",
    correctAnswer: "correct text",
    wrongAnswer: ["wrong text1","wrong text2","wrong text3"]
}

var questionData2 = {
    questionText: "question text2",
    correctAnswer: "correct text",
    wrongAnswer: ["wrong text1","wrong text2","wrong text3"]
}

var questionData3 = {
    questionText: "question text3",
    correctAnswer: "correct text",
    wrongAnswer: ["wrong text1","wrong text2","wrong text3"]
}

var questionData4 = {
    questionText: "question text4",
    correctAnswer: "correct text",
    wrongAnswer: ["wrong text1","wrong text2","wrong text3"]
}
var questionData5 = {
    questionText: "question text5",
    correctAnswer: "correct text",
    wrongAnswer: ["wrong text1","wrong text2","wrong text3"]
}

var questionData6 = {
    questionText: "question text6",
    correctAnswer: "correct text",
    wrongAnswer: ["wrong text1","wrong text2","wrong text3"]
}

var questionData7 = {
    questionText: "question text7",
    correctAnswer: "correct text",
    wrongAnswer: ["wrong text1","wrong text2","wrong text3"]
}

var questionData8 = {
    questionText: "question text8",
    correctAnswer: "correct text",
    wrongAnswer: ["wrong text1","wrong text2","wrong text3"]
}
var questions = [questionData1, questionData2, questionData3, questionData4,questionData5, questionData6, questionData7, questionData8];


//Program///////////////////////////////

//global variables///////////////////////////////

var timeLeft;
var penalty = 10;
var answerTextDelay = 1;
var highscoreName;
var highscoreList = [];
var end = false;

var remainingQuestions;
var nextQuestion;

//element selectors///////////////////////////////

//display//
var htmlEl = document.querySelector("html");
var mainForm = document.querySelector(".main-form");
var timerEl = document.querySelector(".timer");
var timerDisplay = document.querySelector("#timer-display");
var highscoresButtonEl = document.querySelector(".highscores");
highscoresButtonEl.addEventListener("click", renderHighscore);

//functions///////////////////////////////

//init///////////////////////////////

initialize();

function initialize() {

    end = false;
    timeLeft = 80;
    remainingQuestions = questions.slice();
    highscoresButtonEl.setAttribute("style", "visibility: visible")

    renderTimer();
    renderQuizMain();
}

//main quiz logic///////////////////////////////

function startQuiz() {

    shuffle(remainingQuestions);
    generateQuestion();
    startQuizTimer();

}

function checkAnswer(event) {
    event.stopPropagation();
    if (event.currentTarget.textContent === nextQuestion.correctAnswer) {
        generateQuestion();
        renderAnswerResult("Correct");

    } else {

        timeLeft = timeLeft - penalty;
        renderTimer();
        generateQuestion();
        renderAnswerResult("Wrong");
        }

}

function generateQuestion() {

    if (remainingQuestions.length > 0){        
        nextQuestion = remainingQuestions.shift();
        renderQuestion(nextQuestion);
    } else {
        renderQuizEnd();
    }

}

function resetScores() {
    highscoreList = [];
    localStorage.setItem("highScores", JSON.stringify(highscoreList));
}

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

//timers///////////////////////////////

function startQuizTimer() {
    let timer = setInterval(() => {
        timeLeft--;
        renderTimer();
        if (timeLeft===0 || end === true) {
            clearInterval(timer);
            renderQuizEnd();
        }
    }, 1000);
}

function answerTextDelayTimer(element) {
    let timer = setInterval(() => {
        answerTextDelay--;

        if (answerTextDelay === 0) {
            clearInterval(timer);
            mainForm.removeChild(element);
        }
    }, 1000);
}

//save local data///////////////////////////////

var highscoreEntry = {
    saveName: "",
    score: 0
}

function submitHighscore(event) {

    event.preventDefault();
    
    inputTextEl = document.getElementById("highscore-name");

    highscoreEntry.saveName = inputTextEl.value;
    highscoreEntry.score = timeLeft;
    highscoreList.push(highscoreEntry);

    highscoreList.sort((b, a) => a.score - b.score);
    localStorage.setItem("highScores", JSON.stringify(highscoreList));


    renderHighscore();
}


//render elements///////////////////////////////

function renderQuizMain() {
    clearMain();

    var titleEl = document.createElement("h1");
    titleEl.textContent = "Javascript Quiz";
    mainForm.appendChild(titleEl);

    var descriptionEl = document.createElement("p");
    descriptionEl.textContent = "Test your javascript knowledge with this quiz all about javascript! You have a set time limit and time will be subtracted for wrong answers. Click start quiz when ready."
    mainForm.appendChild(descriptionEl);

    var startButtonEl = document.createElement("button");
    startButtonEl.textContent = "Start Quiz";
    mainForm.appendChild(startButtonEl);
    startButtonEl.addEventListener("click", startQuiz);

    var resetScoreButtonEl = document.createElement("button");
    resetScoreButtonEl.setAttribute("id", "reset-scores");
    resetScoreButtonEl.textContent = "Reset Highscores";
    mainForm.appendChild(resetScoreButtonEl);
    resetScoreButtonEl.addEventListener("click", resetScores);
}

function renderQuestion(question) {
        clearMain();

        var questionTextEl = document.createElement("ol");
        questionTextEl.textContent = question.questionText;
        mainForm.appendChild(questionTextEl);

        var answerList = question.wrongAnswer.slice();
        answerList.push(question.correctAnswer);
        shuffle(answerList);

        for (let i = 0; i < answerList.length; i++) {
            var answerEl = document.createElement("li");
            var answerButtonEl = document.createElement("button");
            answerButtonEl.setAttribute("class", "answer-button");
            answerButtonEl.textContent = answerList[i];
            answerEl.appendChild(answerButtonEl);
            questionTextEl.appendChild(answerEl);
            answerEl.addEventListener("click", checkAnswer);
        }
}

function renderHighscore() {
    clearMain();
    highscoresButtonEl.setAttribute("style", "visibility: hidden");
    timerEl.setAttribute("style", "visibility: hidden");

    highscoreTitleEl = document.createElement("h1");
    highscoreTitleEl.textContent = "Highscores";
    mainForm.appendChild(highscoreTitleEl);

    listEl = document.createElement("ol");
    mainForm.appendChild(listEl);

    highscoreList = JSON.parse(localStorage.getItem("highScores"));
    if (highscoreList != null){
        for (let i = 0; i < highscoreList.length; i++) {
            nameEl = document.createElement("li");
            nameEl.textContent = highscoreList[i].saveName + ": " + highscoreList[i].score;
            listEl.appendChild(nameEl);
        }
    }

    restartButtonEl = document.createElement("button");
    restartButtonEl.textContent = "Return to start";
    mainForm.appendChild(restartButtonEl);
    restartButtonEl.addEventListener("click", initialize);
}

function renderQuizEnd() {
    clearMain();
    clearInterval(startQuizTimer.timer);
    end = true;

    var finishEl = document.createElement("h2");
    finishEl.textContent = "All done!";
    mainForm.appendChild(finishEl);

    var finalscoreEl = document.createElement("p");
    finalscoreEl.textContent = "your score is: " + timeLeft;
    mainForm.appendChild(finalscoreEl);

    //submit form////////////////////////////////////////////
    var highscoreFormEl = document.createElement("form");
    highscoreFormEl.setAttribute("id", "submit-highscore");
    mainForm.appendChild(highscoreFormEl);
    highscoreFormEl.addEventListener("submit", submitHighscore);
    
    var inputNameEl = document.createElement("input");
    inputNameEl.setAttribute("type", "text");
    inputNameEl.setAttribute("name", "highscore-name");
    inputNameEl.setAttribute("id", "highscore-name");
    inputNameEl.setAttribute("placeholder", "enter your name");
    inputNameEl.setAttribute("required", "true");
    highscoreFormEl.appendChild(inputNameEl);
   
    var inputSubmitEl = document.createElement("input");
    inputSubmitEl.setAttribute("type", "submit");
    inputSubmitEl.setAttribute("value", "Submit");
    highscoreFormEl.appendChild(inputSubmitEl);
    ///////////////////////////////////////////////////////////

    var resetScoreButtonEl = document.createElement("button");
    resetScoreButtonEl.setAttribute("id", "reset-scores");
    resetScoreButtonEl.textContent = "Reset Highscores";
    mainForm.appendChild(resetScoreButtonEl);
    resetScoreButtonEl.addEventListener("click", resetScores);

    var restartButtonEl = document.createElement("button");
    restartButtonEl.setAttribute("id", "restart-button");
    restartButtonEl.textContent = "Restart Quiz";
    mainForm.appendChild(restartButtonEl);
    restartButtonEl.addEventListener("click", initialize);
}

function renderAnswerResult(result) {
    resultTextEl = document.createElement("div");
    resultTextEl.opacity = 1;
    resultTextEl.setAttribute("class", "answer-result-text");
    resultTextEl.textContent = result;
    mainForm.appendChild(resultTextEl);
    answerTextDelay = 1;
    answerTextDelayTimer(resultTextEl);
}

function renderTimer() {
    timerEl.setAttribute("style", "visibility: visible");
    timerDisplay.textContent = timeLeft;
}

function clearMain() {
    mainForm.innerHTML = "";
}






