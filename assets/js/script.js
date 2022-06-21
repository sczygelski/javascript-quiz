//variables
var startit = document.getElementById('start')
var questioning = document.getElementById('questionscontainer')
var allquestionsElement = document.getElementById('questionscontainer')

//questions
let allquestions = {
    title: 'What is my name?',
    answers: [
        {text: 'Ava', correct:true},
        {text: 'Brad', correct:false},
        {text: 'Chad', correct:false},
        {text: 'Dad', correct:false}
    ]
}

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
function showquestions(q){
    let questionDiv = document.getElementById('title');

    questionDiv.textContent = q.title;
}
showquestions(allquestions);

//Save answers
function answerchosen() {

}

//highscores


