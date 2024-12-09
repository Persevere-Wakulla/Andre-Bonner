let playerChoice = null;
const choices = ['rock', 'paper', 'scissors'];
const rockElement = document.getElementById('rock');
const paperElement = document.getElementById('paper');
const scissorsElement = document.getElementById('scissors');
let score = 0;

// Create a eventListener for 'click' for the scissorsElement
// Create a eventListener for 'click' for the paperElement

function computerChoice(arr) {
  return arr[Math.floor(Math.random() * 3)];
}

//!1 Created an eventLister for 'click'for rock,paper,scissors elements
// Create a eventListener for 'click' for the rockElement
// I will need to grab the rockElement and addEventListen
// I will need to create an html element with the ID of rockElement
// rock event
rockElement.addEventListener('click', handleRock);

//!2 When element is clicked, it changed the players choice and ran the function to have the computer

//!3 we created a function to determine who wins base on the choices and put that into the click events as well
// determine the winners!
// let playerChoice = ''
// Hold the value the computer
// handleRock, handlePaper, handleScissors
// 1 = rock
// 2 = paper
// 3 = scissors
function handleRock() {
  // local Scope
  // computerChoice
  const computerDecision = computerChoice(choices);
  console.log(computerDecision);
  playerChoice = 'rock';
  // html stuff
  determineWinner(playerChoice, computerDecision);
}
// handleScissor

// handlePaper

function determineWinner(playerChoice, computerChoice) {
  // Tie
  // Win Case
  // rock over scissors
  // comparing IF playerChoice IS 'rock' && IF computerChoice IS 'scissors'
  // scissors over paper
  // comparing IF playerChoice IS 'scissors' && IF computerChoice IS 'paper'
  // paper over rock
  // comparing IF playerChoice IS 'paper' && IF computerChoice IS 'rock'
  // IF player hasn't wont THEN they lost
  // Lost
}
