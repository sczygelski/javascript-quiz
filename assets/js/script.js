//variables
var startit = document.getElementById("start");
var questioning = document.getElementById("questionscontainer");
var answering = document.getElementById("answers");
var questionindex = 0;
var buttona = document.getElementById("a");
var buttonb = document.getElementById("b");
var buttonc = document.getElementById("c");
var buttond = document.getElementById("d");


//questions
let allquestions = [
  {
    title: "What type of brackets show an arrey?",
    a: "{}",
    b: "()",
    c: "<>",
    d: "[]",
    answerchosen: "d",
  },
  {
    title: "Which number is 1?",
    a: "1",
    b: "2",
    c: "3",
    d: "4",
    answerchosen: "a",
  },
];

var finalquestion = allquestions.length;

//trigger the button to start quiz
startit.addEventListener("click", startQuiz);
function startQuiz() {
  console.log("started");
  startit.classList.add("hide");
  questioning.classList.remove("hide");
  answering.classList.remove("hide");
  startQuizing();
}

//Show questions
function startQuizing() {
  var currentQuestion = allquestions[questionindex];
  questioning.innerHTML = currentQuestion.title;
  buttona.innerHTML = currentQuestion.a;
  buttonb.innerHTML = currentQuestion.b;
  buttonc.innerHTML = currentQuestion.c;
  buttond.innerHTML = currentQuestion.d;
}

//check answers
function checkanswers(answer) {
  correct = allquestions[currentQuestion].answerchosen;

  if (answer === correct && currentQuestion !== finalquestion) {
    currentQuestion++;
    startQuizing();
  } else if (answer !== correct && currentQuestion !== finalquestion) {
    currentQuestion++;
    startQuizing();
  } else {
    showscore();
  }
}

//show scores
//function showscore()

//Save answers
//function answerchosen()

//highscores
