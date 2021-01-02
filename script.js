const quizData = [
    {
        question: 'Who was the first To reach Mount Everest',
        a: 'Neil Armstrong',
        b: 'Edmund Hillary, Sherpa Tenzing',
        c: 'Robert Peary, Amundsen',
        d: 'Robert Walpole, Trygve Lie',
        correct: 'b'
    },
    {
        question: 'Who was the European to attack India',
        a: 'Marco Pole',
        b: 'VascoDa Gama',
        c: 'Alexander The Great',
        d: 'Edwin E. Aldrin',
        correct: 'c'

    },
    {
        question: 'Who was the first To reach North Pole ',
        a: 'Amundsen',
        b: 'Edmund Hillary,',
        c: 'Robert Peary',
        d: 'Sherpa Tenzing',
        correct: 'c'
    }
]

const answersEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById("question");
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const quiz = document.getElementById('quiz');
const reload = document.getElementById('reload')

let currentQuiz = 0;
let score = 0;

function reloadEl(){
    location.reload();
}

reload.addEventListener("click", ()=>{
    reloadEl();
})

loadQuiz();


function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    
}

function getSelected(){
    let answer = undefined;
    answersEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers(){
    answersEls.forEach(answerEl => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        } else{
            quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length}</h2><button onClick='reloadEl()'>Try again</button>`
        }
    }
    
}); 