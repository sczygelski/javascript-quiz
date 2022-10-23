//variables
var startit = document.getElementById("start");
var questioning = document.getElementById("questionscontainer");
var answering = document.getElementById("answers");
var buttona = document.getElementById("a");
var buttonb = document.getElementById("b");
var buttonc = document.getElementById("c");
var buttond = document.getElementById("d");
var submitit = document.getElementById("finalscore")
var questionnn = document.getElementById("title")
var scoreOutput = document.getElementById("score")
var allscores = JSON.parse(localStorage.getItem("scoreOutput")) || []
var highscores = document.getElementById("highscores")


//questions
var allquestions = [
  {
    question: "What type of brackets show an arrey?",
    a: "{}",
    b: "()",
    c: "<>",
    d: "[]",
    answerchosen: "d",
  },
  {
    question: "Which number is 1?",
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
  startit.classList.add("hide");
  questioning.classList.remove("hide");
  answering.classList.remove("hide");
  startQuizing();
}

//Show questions
function startQuizing() {
    if (questionindex === finalindex){
        showscore()
   //     return
    }
  questionnn.innerHTML = allquestions[questionindex].question;
  buttona.innerHTML = allquestions[questionindex].a;
  buttonb.innerHTML = allquestions[questionindex].b;
  buttonc.innerHTML = allquestions[questionindex].c;
  buttond.innerHTML = allquestions[questionindex].d;
}

//check answers
function checkanswers(answer) {

  if (answer === allquestions[questionindex].answerchosen && finalindex !== questionindex) {
    questionindex++;
    score++
    startQuizing(questionindex);
    console.log(questionindex)
  } else if (answer !== allquestions[questionindex].answerchosen && finalindex !== questionindex) {
    questionindex++;
    startQuizing(questionindex);
  } else if (finalindex !== allquestions.length) {
  }
}

//show scores
function showscore(){
    submitit.classList.remove("hide")
    console.log("here!")
    scoreOutput.innerHTML = "You got " + score + "!"
}

//Save scores
function savescore(){
  allscores.forEach(function(score) {
    localStorage.setItem("thisscore", JSON.stringify(score))
    console.log(localStorage.getItem(score))
    // var li = document.createElement("li")
    // li.textContent=score
    // highscores.appendChild(li)
    console.log("made it")
    // console.log(localStorage.getItem("allscores"))
  })

}


//function answerchosen()

//highscores

//clear storage
