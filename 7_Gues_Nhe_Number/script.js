const { use } = require("react");

const randomNumber = parseInt(Math.random() * 100 + 1)

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame =true;

// check user is available or not to play game
if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        let guess = parseInt(userInput.value);
        validation(guess);
    })
}

function validation(guess){
    if(isNaN(guess) || guess < 1  || guess > 100){
        console.log('Please Enter a valid number between 1 to 100');
        
    }else{
        prevGuess.push(guess);
        if(guess === 10){
            cleanDisplayGuess(guess);
            displayMessage(`Game is over. The random number is ${randomNumber}`);
            endGame();
        }else{
            cleanDisplayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
     if(guess === randomNumber){
        displayMessage(`You Guess The right number. ${randomNumber}`);
        endGame();
     }else if(guess < randomNumber){
        displayMessage(`The number is tooo low.`);
     }else if(guess > randomNumber){
        displayMessage(`The number is tooo high.`)
     }
}

function cleanDisplayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}: `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h3>${message}</h3>`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    startGame();
}

function startGame(){
     const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}