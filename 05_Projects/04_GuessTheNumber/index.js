let randomNumber = parseInt(Math.random()*100 +1)
console.log(randomNumber)

const submit = document.querySelector('#subt')
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startover = document.querySelector(".resultParas");

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame){
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid no')
    }else if(guess <1){
        alert("Please enter a no more than 1");
    }else if(guess >100){
        alert("Please enter a no less than 100");
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game over. Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess){
    if (guess === randomNumber) {
      displayMessage(`Your guessed it right`);
      endGame();
    } else if (guess < randomNumber) {
      displayMessage("Number is too low");
    } else if (guess > randomNumber) {
      displayMessage("Number is too high");
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}  ` 
    numGuess++
    remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function newGame(){
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener('click', (e) => {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled')
        startover.removeChild(p)
        playGame = true
    })
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disables', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id='newGame>Start new Game</h2>`
    startover.appendChild(p)
    playGame = false;
    newGame()
}