const topics = {

    general: {
        easy: [
            "Describe your perfect day.",
            "What is your favorite hobby and why?",
            "Describe a person you admire.",
            "What is your favorite place you have visited?"
        ],

        medium: [
            "Is failure necessary for success?",
            "Does money bring happiness?",
            "Is social media good for society?",
            "Should everyone learn how to cook?"
        ],

        hard: [
            "Is success more about luck or hard work?",
            "Can technology make people less human?",
            "Is freedom more important than security?",
            "Does competition make society better?"
        ]
    },

    technical: {
        easy: [
            "What is the internet?",
            "What is an operating system?",
            "What is artificial intelligence?",
            "What is cloud computing?"
        ],

        medium: [
            "How does artificial intelligence affect everyday life?",
            "What are the advantages of open-source software?",
            "How does a database store information?",
            "Why is cybersecurity important?"
        ],

        hard: [
            "Will AI eventually replace software developers?",
            "Should autonomous machines be allowed to make critical decisions?",
            "Can artificial intelligence become truly creative?",
            "What are the biggest technological risks facing humanity?"
        ]
    },

    interview: {
        easy: [
            "Tell me about yourself.",
            "What are your hobbies?",
            "What is your biggest strength?",
            "Where do you see yourself in five years?"
        ],

        medium: [
            "What is your biggest weakness?",
            "Tell me about a challenge you overcame.",
            "Why should we hire you?",
            "Describe a time when you worked in a team."
        ],

        hard: [
            "Tell me about a failure and what you learned from it.",
            "Why should we choose you over another candidate?",
            "Describe a situation where you disagreed with your team.",
            "What would you do if you completely disagreed with your manager?"
        ]
    },

    debate: {
        easy: [
            "Should college students have attendance requirements?",
            "Should homework be banned?",
            "Is online education better than traditional education?",
            "Should students be allowed to use phones in class?"
        ],

        medium: [
            "Should college education be free?",
            "Is social media doing more harm than good?",
            "Should artificial intelligence be regulated?",
            "Is working from home better than working from an office?"
        ],

        hard: [
            "Should governments control the development of artificial intelligence?",
            "Is privacy more important than national security?",
            "Should wealthy people pay significantly higher taxes?",
            "Can censorship ever be justified?"
        ]
    }
};


// =========================
// TOPIC GENERATOR
// =========================

const categorySelect = document.getElementById("category");
const difficultySelect = document.getElementById("difficulty");
const topicTrack = document.getElementById("topicTrack");
const generateButton = document.getElementById("generateBtn");

let isShuffling = false;






function generateTopic() {

    if (isShuffling) {
        return;
    }

    isShuffling = true;

    generateButton.disabled = true;
    generateButton.style.opacity = "0.6";


    const category = categorySelect.value;
    const difficulty = difficultySelect.value;

    const availableTopics = topics[category][difficulty];


    // Choose the final topic
    const finalIndex = Math.floor(
        Math.random() * availableTopics.length
    );

    const finalTopic = availableTopics[finalIndex];


    // Create topics for the scrolling animation
    const shuffleTopics = [];

    for (let i = 0; i < 10; i++) {

        const randomIndex = Math.floor(
            Math.random() * availableTopics.length
        );

        shuffleTopics.push(
            availableTopics[randomIndex]
        );
    }


    // Final topic must be the last one
    shuffleTopics.push(finalTopic);


    // Remove old topics
    topicTrack.innerHTML = "";


    // Create the scrolling list
    shuffleTopics.forEach(function(topic) {

        const element = document.createElement("h2");

        element.textContent = topic;

        topicTrack.appendChild(element);

    });


    // Start from the top
    topicTrack.style.transition = "none";
    topicTrack.style.transform = "translateY(0)";


    // Force browser to register the starting position
    topicTrack.offsetHeight;


    // Calculate how far we need to move
    const topicHeight = 120;

    const finalPosition =
        -(shuffleTopics.length - 1) * topicHeight;


    // Start the smooth scroll
    topicTrack.style.transition =
        "transform 2.2s cubic-bezier(0.12, 0.8, 0.18, 1)";

    topicTrack.style.transform =
        `translateY(${finalPosition}px)`;


    // Animation finished
    setTimeout(function() {

        isShuffling = false;

        generateButton.disabled = false;
        generateButton.style.opacity = "1";

    }, 2300);
}


generateButton.addEventListener("click", generateTopic);


// =========================
// TIMER
// =========================


// =========================
// TIMER
// =========================

const timerElement = document.getElementById("timer");
const timerButton = document.getElementById("timerBtn");
const resetButton = document.getElementById("resetBtn");
const durationButtons = document.querySelectorAll(".duration-btn");

let timeLeft = 60;
let selectedDuration = 60;
let timerInterval = null;


// Convert seconds into MM:SS
function updateTimerDisplay() {

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timerElement.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}


// Select speaking duration
function selectDuration(duration) {

    // Don't change duration while timer is running
    if (timerInterval !== null) {
        return;
    }

    selectedDuration = duration;
    timeLeft = duration;

    updateTimerDisplay();

    // Remove active state from all buttons
    durationButtons.forEach(function(button) {
        button.classList.remove("active");
    });

    // Add active state to selected button
    document
        .querySelector(`[data-duration="${duration}"]`)
        .classList.add("active");

    timerButton.textContent = "▶ Start speaking";
}


// Duration button clicks
durationButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const duration = Number(
            button.dataset.duration
        );

        selectDuration(duration);

    });

});


// Start the timer
function startTimer() {

    if (timerInterval !== null) {
        return;
    }

    timerElement.classList.add("running");

    timerButton.textContent = "⏸ Pause";

    timerInterval = setInterval(function() {

        timeLeft--;

        updateTimerDisplay();

        if (timeLeft <= 0) {

            clearInterval(timerInterval);

            timerInterval = null;

            timerButton.textContent = "▶ Start speaking";

            timerElement.classList.remove("running");

            timeLeft = 0;

            updateTimerDisplay();
        }

    }, 1000);
}


// Pause the timer
function pauseTimer() {

    clearInterval(timerInterval);

    timerInterval = null;

    timerButton.textContent = "▶ Resume";

    timerElement.classList.remove("running");
}


// Reset the timer
function resetTimer() {

    clearInterval(timerInterval);

    timerInterval = null;

    // Reset to the selected duration
    timeLeft = selectedDuration;

    updateTimerDisplay();

    timerButton.textContent = "▶ Start speaking";

    timerElement.classList.remove("running");
}


// Start / pause button
timerButton.addEventListener("click", function() {

    if (timerInterval === null) {

        startTimer();

    } else {

        pauseTimer();

    }

});


// Reset button
resetButton.addEventListener("click", resetTimer);


// Show initial time
updateTimerDisplay();   