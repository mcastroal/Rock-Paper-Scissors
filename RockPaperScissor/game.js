// User Input Elements
const choiceInput = document.getElementById('user-input');
const form = document.getElementById('form');

// Output Elements
const resultDisplay = document.getElementById('result');
const computerDisplay =document.getElementById('computer-choice');

// Valid selections
const SELECTIONS = ["rock", "paper", "scissors"];

//Form Submission (typed input)
form.addEventListener("submit", function (event) {
    event.preventDefault(); //prevents the page from refreshing when you click submit

    const userChoice = choiceInput.value.toLowerCase().trim(); //Cleans the input
    playGame(userChoice);
});

//Clicking Options
document.getElementById("rock").addEventListener("click", () => playGame("rock"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));

// Main Game function
function playGame(userChoice) {
    // Validate Input
    if (!SELECTIONS.includes(userChoice)) {
        resultDisplay.textContent = "Invalid choice. Please pick rock, paper, or scissors.";
        return;
    }

    // Generate random computer choice
    const computerChoice = randomSelection();
    // Display computer choice
    computerDisplay.textContent = `Computer chose: ${computerChoice}`;

    // Determine the Winner
    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
    } else {
        result = "Computer Wins!";
    }

    // Display the results
    resultDisplay.textContent = result;
}
// Random Computer Selection
function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
    return SELECTIONS[randomIndex];
}