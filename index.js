let qAndA = [
    {
        question: "What type of scenery do you prefer?"
        answers: ["beaches", "Mountains", "Urban Skylines", "Countryside"]
    },
    {
        question: "What is your preferred travel activity?"
        answers: ["Relaxing on the beach", "Hiking in the mountains", "Exploring museums and galleries", "Visiting local markets"]
    },
    {
        question: "Which climate do you enjoy the most?"
        answers: ["Tropical (warm and sunny)", "Cool and refreshing", "Mild and temperate", "Seasonal changes"]
    },
    {
        question: "What cultural experience are you most interested in?"
        answers: ["Trying local cuisines", "Immersing in historical sites", "Attending cultural festivals", "Interacting with local communities"]
    },
    {
        question: "How do you prefer to travel within a destination?"
        answers: ["Relaxing in a resort", "Backpacking and hiking", "Using public transportation", "Renting a car for flexibility"]
    }
];

let aScore = 0;
let bScore = 0;
let cScore = 0;
let dScore = 0;

function updateQuestion(question) {
    document.getElementById("question").innerText = qAndA.question
}; 

function updateAnswers(answers) {
    document.getElementById("answers").innerText = qAndA.answers
}