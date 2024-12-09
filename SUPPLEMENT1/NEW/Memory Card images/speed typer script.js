let wordBank = null;
fetch("words.json").then(function (response) {
    response.json().then(function (json) {
        wordBank = json;

    })
})

const selector = document.querySelector('.select');
const computerWords = document.getElementById('words');
const frontCard = document.querySelector('.front-card');
const backCard = document.querySelector('.back-card');
const reloadBtn = document.querySelector('#reload-btn');
const playerInput = document.querySelector('#user-text');
const finalScore = document.querySelector('#final-score')
const score = document.querySelector('#score')
const timerDisplay = document.querySelector('#timer')

let countDown = 10000;
let gameRunning = false;
let gameScore = 0;
let selectedLevel = null;
let disabledDropdown = null;
let displayWord = computerWords.textContent;


selector.addEventListener('change', () => {
    disabledDropdown = selector
    disabledDropdown.disabled = true;
    selectedLevel = selector.selectedOptions[0].textContent
    timer();
    gameRunning = true;
    playerInput.focus();
    chooseGameWords()
})


function chooseGameWords() {
    let levelWords = []
    if (selectedLevel === 'Easy') {
        levelWords.push(...wordBank.twoLetterWords);
    }
    if (selectedLevel === 'Medium') {
        levelWords.push(...wordBank.threeLetterWords); levelWords.push(...wordBank.fourLetterWords);
    }
    if (selectedLevel === 'Hard') {
        levelWords.push(...wordBank.fiveLetterWords);
        levelWords.push(...wordBank.sixLetterWords);
    }
    function randomWord(arr) {
        const totalWords = arr.length;
        const randomWords = Math.floor(Math.random() * totalWords);
        return arr[randomWords]
    }
    let randomChoiceWord = randomWord(levelWords);
    computerWords.textContent = randomChoiceWord;
}


playerInput.addEventListener('keyup', () => {
    if (playerInput.value === computerWords.textContent && gameRunning) {
        playerInput.value = "";
        chooseGameWords()
        gameScore++
        score.textContent = gameScore;
        finalScore.textContent = gameScore;
        countDown += 2000;
    }
})
// Update the count down every 1 second
function timer() {
    const myCountDown = setInterval(function () {
        timerDisplay.textContent = countDown / 1000;
        if (countDown <= 0) {
            clearInterval(myCountDown);
            frontCard.style.display = "none";
            backCard.style.display = "flex";
            gameRunning = false;
        }
        countDown -= 1000;
    }, 1000);
};

reloadBtn.addEventListener('click', () => {
    frontCard.style.display = "block";
    backCard.style.display = "none";
    timerDisplay.textContent = '';
    countDown = 10000;
    score.textContent = 0;
    disabledDropdown.disabled = false;
    selector.value = '';
    finalScore.textContent = "";
});