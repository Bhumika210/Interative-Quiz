const questions = [
    {
        question: "Which is the largest desert in India?",
        options: [
            
            { text: "Rann of Kutch", isCorrect: false },
            { text: "Spiti Valley", isCorrect: false },
            { text: "Thar Desert", isCorrect: true },
            { text: "Deccan Plateau", isCorrect: false }
        ]
    },
    {
        question: "What is the capital of Rajasthan?",
        options: [
           
            { text: "Jodhpur", isCorrect: false },
            { text: "Jaipur", isCorrect: true },
            { text: "Udaipur", isCorrect: false },
            { text: "Bikaner", isCorrect: false }
        ]
    },
    {
        question: "Which river is known as the 'Sorrow of Bihar'?",
        options: [
            { text: "Kosi", isCorrect: true },
            { text: "Ganga", isCorrect: false },
            { text: "Yamuna", isCorrect: false },
            { text: "Brahmaputra", isCorrect: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: [
       
            { text: "Venus", isCorrect: false },
            { text: "Mars", isCorrect: true },
            { text: "Jupiter", isCorrect: false },
            { text: "Saturn", isCorrect: false }
        ]
    },
    {
        question: "What is the capital of France?",
        options: [
           
            { text: "London", isCorrect: false },
            { text: "Berlin", isCorrect: false },
            { text: "Paris", isCorrect: true },
            { text: "Madrid", isCorrect: false }
        ]
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: [
            { text: "William Shakespeare", isCorrect: true },
            { text: "Charles Dickens", isCorrect: false },
            { text: "Jane Austen", isCorrect: false },
            { text: "Mark Twain", isCorrect: false }
        ]
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: [
            { text: "Osmium", isCorrect: false },
            { text: "Ozone", isCorrect: false },
            { text: "Oxygenium", isCorrect: false },
            { text: "Oxygen", isCorrect: true }
        ]
    },
    {
        question: "In which country would you find the Great Barrier Reef?",
        options: [
            { text: "Australia", isCorrect: true },
            { text: "New Zealand", isCorrect: false },
            { text: "USA", isCorrect: false },
            { text: "Philippines", isCorrect: false }
        ]
    },
    {
        question: "What is the largest mammal in the world?",
        options: [
            { text: "Elephant", isCorrect: false },
            { text: "Blue Whale", isCorrect: true },
            { text: "Giraffe", isCorrect: false },
            { text: "Shark", isCorrect: false }
        ]
    },
    {
        question: "What is the speed of light?",
        options: [
            { text: "300,000 km/s", isCorrect: false },
            { text: "150,000 km/s", isCorrect: false },
            { text: "299,792 km/s", isCorrect: true },
            { text: "100,000 km/s", isCorrect: false }
        ]
    },
    {
        question: "Which ocean is the largest?",
        options: [
            { text: "Pacific Ocean", isCorrect: true },
            { text: "Atlantic Ocean", isCorrect: false },
            { text: "Indian Ocean", isCorrect: false },
            { text: "Arctic Ocean", isCorrect: false }
        ]
    },
    {
        question: "Which is the longest river in the world?",
        options: [
           
            { text: "Amazon River", isCorrect: false },
            { text: "Yangtze River", isCorrect: false },
            { text: "Ganges River", isCorrect: false },
            { text: "Nile River", isCorrect: true }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        options: [
           
            { text: "Vincent van Gogh", isCorrect: false },
            { text: "Pablo Picasso", isCorrect: false },
            { text: "Claude Monet", isCorrect: false },
            { text: "Leonardo da Vinci", isCorrect: true }
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: [
            { text: "China", isCorrect: false },
            { text: "Japan", isCorrect: true },
            { text: "South Korea", isCorrect: false },
            { text: "India", isCorrect: false }
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: [
            { text: "Diamond", isCorrect: true },
            { text: "Gold", isCorrect: false },
            { text: "Iron", isCorrect: false },
            { text: "Platinum", isCorrect: false }
        ]
    },
    {
        question: "In which year did the Titanic sink?",
        options: [
            { text: "1905", isCorrect: false },
            { text: "1920", isCorrect: false },
            { text: "1912", isCorrect: true },
            { text: "1898", isCorrect: false }
        ]
    }
];

const prashna = document.querySelector(".question"); 
const optionButtons = document.querySelectorAll(".options"); 
const nextBtn = document.querySelector(".nextBtn");
const scoreElement = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

// Function to load a new question
function loadQuestion() {
    const questionData = questions[currentQuestionIndex];

    prashna.innerText = questionData.question; // Set question text

    // Reset buttons
    optionButtons.forEach((button, index) => {
        button.innerText = questionData.options[index].text;
        button.style.backgroundColor = ""; // Reset color
        button.disabled = false; // Enable buttons
        button.onclick = () => handleAnswer(questionData.options[index].isCorrect, button);
    });

    nextBtn.style.display = "none"; // Hide 'Next' button until answer is clicked
}

// Function to handle answer selection
function handleAnswer(isCorrect, clickedButton) {
    // Disable all buttons after selection
    optionButtons.forEach((btn) => btn.disabled = true);
    clickedButton.disabled = false;

    if (isCorrect) {
        clickedButton.style.backgroundColor = "#6CCF70"; // Correct answer
        score++;
    } else {
        clickedButton.style.backgroundColor = "#FF6F61"; // Wrong answer

        // Find the correct answer and highlight it
        const correctButton = Array.from(optionButtons).find((btn, index) => 
            questions[currentQuestionIndex].options[index].isCorrect
        );
        correctButton.style.backgroundColor = "#6CCF70"; // Highlight correct answer
    }

    // Update score
    scoreElement.innerText = score;

    // Show 'Next' button
    nextBtn.style.display = "block";
}

// Function to go to the next question
nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert(`🎉 Quiz Completed! You scored ${score}/${questions.length}`);
        resetQuiz();
    }
});

// Fisher-Yates Shuffle to shuffle the array
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }
}

// Function to reset the quiz
function resetQuiz() {
    // Shuffle the questions array before resetting
    shuffleArray(questions);

    currentQuestionIndex = 0;
    score = 0;
    scoreElement.innerText = score;

    loadQuestion(); // Load the first question after shuffle
}


// Start the quiz with the first question
loadQuestion();



