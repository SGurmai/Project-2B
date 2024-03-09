// Quiz questions
const quizData = [
    {question: "17 + 25 =", answer: 42 },
    {question: "48 - 23 =", answer: 25 },
    {question: "14 x 13 =", answer: 182 },
    {question: "33 + 47 =", answer: 80 },
    {question: "96 - 57 =", answer: 39 },
    {question: "23 x 19 =", answer: 437 },
    {question: "135 ÷ 15 =", answer: 9 },
    {question: "57 + 68 =", answer: 125 },
    {question: "82 - 39 =", answer: 43 },
    {question: "28 x 16 =", answer: 448 },
    {question: "144 ÷ 12 =", answer: 12 },
    {question: "72 ÷ 8 =", answer: 9 },
    {question: "93 + 57 =", answer: 150 },
    {question: "127 - 84 =", answer: 43 },
    {question: "36 x 28 =", answer: 1008 },
    {question: "324 ÷ 9 =", answer: 36 },
    {question: "72 + 89 =", answer: 161 },
    {question: "178 - 63 =", answer: 115 },
    {question: "47 x 39 =", answer: 1833 },
    {question: "924 ÷ 11 =", answer: 84 },
    {question: "108 + 73 =", answer: 181 },
    {question: "237 - 146 =", answer: 91 },
    {question: "58 x 39 =", answer: 2262 },
    {question: "1794 ÷ 18 =", answer: 99 },
    {question: "247 + 136 =", answer: 383 },
    {question: "65 + 29 =", answer: 94 },
    {question: "98 - 57 =", answer: 41 },
    {question: "23 x 15 =", answer: 345 },
    {question: "84 + 53 =", answer: 137 },
    {question: "147 - 69 =", answer: 78 },
    {question: "32 x 18 =", answer: 576 },
    {question: "245 ÷ 7 =", answer: 35 },
    {question: "73 + 96 =", answer: 169 },
    {question: "128 - 87 =", answer: 41 },
    {question: "49 x 24 =", answer: 1176 },
    {question: "264 ÷ 8 =", answer: 33 },
    {question: "96 + 57 =", answer: 153 },
    {question: "187 - 94 =", answer: 93 },
    {question: "36 x 35 =", answer: 1260 },
    {question: "413 ÷ 7 =", answer: 59 },
    {question: "68 + 89 =", answer: 157 },
    {question: "174 - 63 =", answer: 111 },
    {question: "53 x 48 =", answer: 2544 },
    {question: "936 ÷ 12 =", answer: 78 },
    {question: "217 + 136 =", answer: 353 },
    {question: "84 + 37 =", answer: 121 },
];

// Function to choose 20 random questions from the quizData array
function chooseRandomQuestions() {
    const chosenQuestions = [];
    const shuffledData = quizData.sort(() => Math.random() - 0.5); // Shuffle the quiz data array

    for (let i = 0; i < 20; i++) {
        chosenQuestions.push(shuffledData[i]);
    }

    return chosenQuestions;
}

let currentQuestion = 0;
let correctAnswers = 0;
const chosenQuestions = chooseRandomQuestions(); // Choose 20 random questions

// Function to load question onto the page
function loadQuestion() {
    const questionElement = document.getElementById("question");
    const answerElement = document.getElementById("answer");
    const resultElement = document.getElementById("result");

    // Display the current question
    questionElement.innerText = chosenQuestions[currentQuestion].question;

    // Clear previous answer and result
    answerElement.value = "";
    resultElement.innerText = "";
}

// Call loadQuestion function when the page loads to display the first question
window.onload = loadQuestion;

// Function to check the user's answer
function checkAnswer() {
    const userAnswer = parseInt(document.getElementById("answer").value);
    const resultElement = document.getElementById("result");

    if (!isNaN(userAnswer)) {
        if (userAnswer === chosenQuestions[currentQuestion].answer) {
            correctAnswers++;
            resultElement.innerText = "Correct!";
        } else {
            resultElement.innerText = "Wrong!";
        }
    } else {
        resultElement.innerText = "Please enter a valid number.";
        return; 
    }

    // Display the result for a moment before proceeding to the next question
    setTimeout(function() {
        resultElement.innerText = ""; 
        currentQuestion++;
        if (currentQuestion < chosenQuestions.length) {
            loadQuestion();
        } else { 
            // Quiz completed, display correct answers
            document.getElementById("question").innerText = "Quiz completed!";
            document.getElementById("answer").style.display = "none";
            resultElement.innerText = "Total correct answers: " + correctAnswers;
        }
    }, 1500);
}