//variables
var startit = document.getElementById("start");
var questioning = document.getElementById("questionscontainer");
var answering = document.getElementById("answers");
var buttona = document.getElementById("a");
var buttonb = document.getElementById("b");
var buttonc = document.getElementById("c");
var buttond = document.getElementById("d");
var submitit = document.getElementById("finalscore")


//questions
var allquestions = [
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


var finalindex = allquestions.length
var score=0
var questionindex = 0;

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
  correct = allquestions[questionindex]

  if (answer === correct && finalindex !== questionindex) {
    questionindex++;
    score++
    startQuizing();
  } else if (answer !== correct && finalindex !== questionindex) {
    questionindex++;
    startQuizing();
    console.log("stuck here")
  } else {
    showscore();
    submitit.classList.remove("hide")
  }
}

//show scores
function showscore(){
    finalscore.innerHTML = "You got " + score + "!"
}

//Save answers
//function answerchosen()

//highscores
