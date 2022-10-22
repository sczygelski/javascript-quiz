//variables
var startit = document.getElementById("start");
var questioning = document.getElementById("questionscontainer");
var allquestionsElement = document.getElementById("questionscontainer");
var answering = document.getElementById("answers");
var questionindex = 0;

//questions
let allquestions = [
  {
    title: "What type of brackets show an arrey?",
    a:"{}",
    b:"()",
    c:"<>",
    d:"[]",
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

//trigger the button to start quiz
startit.addEventListener("click", startQuiz);
function startQuiz() {
  console.log("started");
  startit.classList.add("hide");
  questioning.classList.remove("hide");
  answering.classList.remove("hide");
  render(allquestions);
}

//Show questions
function render(questionindex) {
    questionscontainer.innerhtml=''
  for (let i = 0; i < allquestions.length; i++) {
    const currentquestion = allquestions[questionindex].title;
    const currentanswers = allquestions[questionindex].answers;
    allquestions.textConect = currentquestion;
  }
}



//Save answers
function answerchosen() {}

//highscores
