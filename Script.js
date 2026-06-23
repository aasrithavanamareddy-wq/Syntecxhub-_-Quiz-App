const questions = [
{
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Chennai", "Hyderabad"],
    answer: "Delhi"
},
{
    question: "Which language is used for web development?",
    options: ["Python", "HTML", "C++", "Java"],
    answer: "HTML"
},
{
    question: "Which planet is called the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    answer: "Mars"
},
{
    question: "What does CSS stand for?",
    options: [
        "Computer Style Sheets",
        "Cascading Style Sheets",
        "Creative Style Sheets",
        "Colorful Style Sheets"
    ],
    answer: "Cascading Style Sheets"
},
{
    question: "Which country is called the Land of the Rising Sun?",
    options: [ "Singapore","Malaysia","Japan","Indonesia"
    ],
    answer: "Japan"
}
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = "";

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const quizBox = document.getElementById("quiz-box");
const scoreText = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");

function loadQuestion() {
    selectedAnswer = "";

    const q = questions[currentQuestion];

    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach(option => {
        const label = document.createElement("label");
        label.classList.add("option");

        label.innerHTML = `
            <input type="radio" name="answer" value="${option}">
            ${option}
        `;

        label.addEventListener("click", () => {
            selectedAnswer = option;
        });

        optionsEl.appendChild(label);
    });

    nextBtn.textContent =
        currentQuestion === questions.length - 1
        ? "Submit"
        : "Next";
}

nextBtn.addEventListener("click", () => {

    if(selectedAnswer === ""){
        alert("Please select an answer!");
        return;
    }

    if(selectedAnswer === questions[currentQuestion].answer){
        score++;
    }

    currentQuestion++;

    if(currentQuestion < questions.length){
        loadQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    quizBox.classList.add("hidden");
    resultBox.classList.remove("hidden");

    scoreText.textContent =
        `Your Score: ${score} / ${questions.length}`;
}

restartBtn.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;

    resultBox.classList.add("hidden");
    quizBox.classList.remove("hidden");

    loadQuestion();
});

loadQuestion();