//variables
var startit = document.getElementById('start')
var questioning = document.getElementById('questionscontainer')
var answering = document.getElementById('answers')
var allquestionsElement = document.getElementById('questionscontainer')
var actualquestionElement = document.getElementById('actualquestion')

//trigger the button to start quiz
startit.addEventListener('click', startQuiz)
function startQuiz() {
    console.log('started')
    startit.classList.add('hide')
    questioning.classList.remove('hide')
    answering.classList.remove('hide')
    currentQuestion = 0 
}

//Show questions
function beginquestions() {
   allquestions.forEach((currentQuestion, questionNumber) => {
       
   })
};

//Save answers
function answerchosen() {

}

//highscores


//questions
var allquestions = [
    {
    question: 'What is my name?',
    answers: [
        {text: 'Ava', correct:true},
        {text: 'Brad', correct:false},
        {text: 'Chad', correct:false},
        {text: 'Dad', correct:false}
    ]
    }
]