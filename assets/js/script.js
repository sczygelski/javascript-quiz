//variables
var startit = document.getElementById('start')
var questioning = document.getElementById('questionscontainer')
var allquestionsElement = document.getElementById('questionscontainer')
var answering = document.getElementById('answers')
var count=10

//questions
let allquestions = [{
    title: 'What type of brackets show an arrey?',
    answers: ['{}','()','<>','[]'],
    answerchosen: 3,
},
{
    title: 'Which number is 1?',
    answers: ['1','2','3','4'],
    answerchosen: 1
}
]


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
    var interval = setInterval(function(
    ){
        document.getElementById('count').innerHTML=count;
        if (count < 0){
            alert("You're out of time");
        }
    }, 20);
    let answering = document.querySelectorAll('.ansbutton');
    answering.forEach(function(element, index){
        element.textContent = q.answers[index];
        element.addEventListener('click', function() {
            if(q.answerchosen == index) {
                console.log('correctamundo');
            }
        });
    });    
}

showquestions(allquestions);

//Save answers
function answerchosen() {

}

//highscores