const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "HTML", "Java", "C++"],
        answer: "HTML"
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "South Korea", "India"],
        answer: "Japan"
    }
];

const quizContainer = document.querySelector('.quiz-container');
const optionsContainer = document.querySelector('.options');
const resultText = document.querySelector('.result');
const scoreElement = document.getElementById('score');
const Timer = document.querySelector('.timer');

let currentQuestionIndex = 0;
let TimeLeft = 30;
let score = 0;


function loadQuiz() {
    startTimer();
    const currentQuestion = quizData[currentQuestionIndex];

    optionsContainer.innerHTML = `<h2>${currentQuestion.question}</h2>`;
    currentQuestion.options.forEach((option, index) => {
        optionsContainer.innerHTML += `
            <div class="option" data-index="${index}">
                ${option}
            </div>
        `;
    })
}

function checkAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    const selectedAnswer = selectedOption.textContent;

    // console.log("Sleected answer si", currentQuestion.answer,selectedAnswer)
    // console.log("Sleected answer si", typeof(currentQuestion.answer),typeof(selectedAnswer))
    // console.log("The conditions is ", selectedAnswer.trim() === currentQuestion.answer.trim());
    if (selectedAnswer.trim() === currentQuestion.answer.trim()) {
        selectedOption.style.backgroundColor = 'green';
        console.log("Correct answer selected",currentQuestion.answer);
        scoreElement.textContent = parseInt(scoreElement.textContent) + 1;
        score++;
       
    }
    else {
        console.log("Incorrect answer selected");
        selectedOption.style.backgroundColor = 'red';
    }
    setTimeout(()=>{
        nextQuestion();
    },800);
}

function nextQuestion() {
    TimeLeft = 30; // Reset timer for the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuiz();
    } else {
        quizContainer.innerHTML = `<h2>Quiz Completed!</h2><p>Your score: ${scoreElement.textContent}/${quizData.length}</p>`;
        quizContainer.innerHTML += `<button onclick="location.reload()">Restart Quiz</button>`;
    }
}

function startTimer() {
    const startTime = TimeLeft;
    setInterval(() => {
        if (TimeLeft > 0) {
            TimeLeft--;
            Timer.textContent = `Time Left: ${TimeLeft}s`;
        }
        else {
            clearInterval(this);
            Timer.textContent = "Time's up!";
            nextQuestion();
        }
    }, 1000);
}

optionsContainer.addEventListener('click', (event) => {
    // Check if the clicked element has the 'option' class
    if (event.target.classList.contains('option')) {
        const selectedIndex = event.target.getAttribute('data-index');
        console.log("Option clicked:", selectedIndex);
        checkAnswer(event.target);
        // You can now use selectedIndex to compare with the correct answer, etc.
    }
});

loadQuiz();
