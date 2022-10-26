const number = Math.floor((Math.random(0, 1) * 100) + 1);
const heading = document.getElementsByTagName('h3')[0]
const form = document.getElementsByTagName('form')[0]
const guess = document.getElementById('guess-input');
const userGuesses = document.getElementById('user-guesses');
const guessFeedback = document.getElementsByTagName('h1')[0];

function getGuess(e) {
    e.preventDefault()
    
    let userGuess = guess.value;
    
    userGuesses.innerHTML += ` ${userGuess}`
    handleGuess(userGuess)
    guess.value = "";

}

function handleGuess(userGuess) {
    if(userGuess < number) {
        guessFeedback.innerHTML = "Your guess is too low. Guess higher!";
    }
    else if(userGuess > number) {
        guessFeedback.innerHTML = "Your guess is too high. Guess lower!";
    }
    else {
        guessFeedback.innerHTML = "You guessed correctly. Game over!";
        endGame();
    }
}

function endGame(){ 
    document.getElementsByTagName('body')[0].removeChild(form)
    heading.innerHTML = `Random number: ${number}`

}


