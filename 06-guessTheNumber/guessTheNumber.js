// let randomNumber = Math.floor(Math.random() * 100) + 1

// const form = document.querySelector('form');
// const input = document.getElementById('guessField');
// const subBtn = document.getElementById('subt');
// const prevGuess = document.querySelector('.guesses');
// const remainGuess = document.querySelector('.lastResult');
// const lowOrHigh = document.querySelector('.lowOrHi');
// const startAgain = document.querySelector('.startAgain');
// console.log(randomNumber)

// let guesses = [];
// let noOfGuess = 0;
// startAgain.style.display = 'none';

// subBtn.addEventListener('click', function(e){
//         e.preventDefault();
//         let guess = input.value;
//         console.log(guess)
//         if(noOfGuess === 10){
//             displayMessage(`Game Over Random number was: ${randomNumber}`)
//             endGame();
//             return;
//         }
//         guesses.push(guess);
//         validateGuess(guess)
//     })

// function validateGuess(guess){
//     if(guess<1 || guess > 100 || isNaN(guess)){
//         alert('please enter a valid guess between 1 - 100');
//     } else {
//         checkGuess(guess)
//     }
// }

// function checkGuess(guess){
//     if(guess > randomNumber){
//         displayMessage(`Number is too high`)
//         displayGuess(guess)
//     } else if(guess < randomNumber){
//         displayMessage(`number is too low`)
//         displayGuess(guess)
//     } else if(guess == randomNumber){
//         displayMessage(`You Won!`)
//         displayGuess(guess)
//         endGame();
//     }
// }

// function displayGuess(guess){
//     input.value = '';
//     prevGuess.innerHTML+= `${guess},`;
//     noOfGuess++;
//     remainGuess.innerHTML--;
//     console.log('No Of Guess:', noOfGuess);
// }
// function displayMessage(message){

//     lowOrHigh.innerHTML = `<h2>${message}</h2>`;
// }

// function endGame(){
//     input.value = ''
//     input.setAttribute('disabled', '');
//     startAgain.style.display = 'flex'
//     startNewGame();
// }

// function startNewGame(){
//     startAgain.addEventListener('click', function(e){
//         startAgain.style.display = 'none';
//         input.removeAttribute('disabled');
//         noOfGuess = 1;
//         guesses = [];
//         remainGuess.innerHTML = 10;
//         lowOrHigh.innerHTML = ''
//         prevGuess.innerHTML = ''
//         randomNumber = Math.floor(Math.random() * 100) + 1;
//     })
// }

/* Redesign and little imrpovment */

document.addEventListener('DOMContentLoaded', function () {
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    let totalGuess = document.querySelector('.totalGuess');
    const form = document.querySelector('.form')
    const input = document.getElementById('input');
    const feedbackMessage = document.querySelector('.message');
    const button = document.querySelector('.button')
    let remainingGuess = document.querySelector('.remainingGuess');
    let previousGuesses = document.querySelector('.previousGuesses');
    const startAgain = document.querySelector('.startAgain');
    let prevGuess = [];
    let noOfGuess = 0;
    startAgain.style.display = 'none'

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let guess = input.value;
        validateGuess(guess)
    });

    startAgain.addEventListener('click', function (e) {
        e.preventDefault();
        startNewGame();
    })

    function validateGuess(guess) {
        if (isNaN(guess) || guess < 1 || guess > 100) {
            feedbackMessage.style.backgroundColor = 'oklch(93.6% 0.032 17.717)';
            feedbackMessage.style.color = 'oklch(44.4% 0.177 26.899)'
            feedbackMessage.style.borderColor = 'oklch(80.8% 0.114 19.571)'
            displayMessage(`please Enter a valid guess`);
        } else {
            noOfGuess++;
            totalGuess.innerHTML--;
            console.log('no of guess:', noOfGuess);
            prevGuess.push(guess);
            checkGuess(guess);
            displayGuess(guess);
            console.log("guess array: ", prevGuess);

            if (noOfGuess === 10) {
                input.style.borderColor = '#e2e8f0'
                endGame();
                return;
            }
        }
    }

    function checkGuess(guess) {
        if (guess > randomNumber) {
            feedbackMessage.style.backgroundColor = 'oklch(95.4% 0.038 75.164)';
            feedbackMessage.style.color = 'oklch(47% 0.157 37.304)';
            feedbackMessage.style.borderColor = 'oklch(90.1% 0.076 70.697)';
            displayMessage(`Try Lower! You have ${10 - noOfGuess} left.`);
        } else if (guess < randomNumber) {
            feedbackMessage.style.backgroundColor = 'oklch(95.4% 0.038 75.164)';
            feedbackMessage.style.color = 'oklch(47% 0.157 37.304)';
            feedbackMessage.style.borderColor = 'oklch(90.1% 0.076 70.697)';
            displayMessage(`Try Higher! You have ${10 - noOfGuess} left.`);
        } else if (guess == randomNumber) {
            feedbackMessage.style.backgroundColor = 'oklch(96.2% 0.044 156.743)';
            feedbackMessage.style.color = 'oklch(44.8% 0.119 151.328)';
            feedbackMessage.style.borderColor = 'oklch(89.7% 0.196 126.665)';
            input.style.borderColor = 'green';
            displayMessage(`Congratulation You Won 🎉`);
            endGame();
        }
    }

    function displayGuess(guess) {
        input.value = '';
        remainingGuess.innerHTML--;
        const currentNoneYetElement = previousGuesses.querySelector('i');
        if (currentNoneYetElement) {
            currentNoneYetElement.remove();
        }
        previousGuesses.innerHTML += `<span class= 'guesses'>${guess}</span>`

    }

    function displayMessage(message) {
        feedbackMessage.innerHTML = `${message}`;
    }

    function endGame() {
        input.value = ''
        input.setAttribute('disabled', '')
        button.style.cursor = 'no-drop'
        button.style.opacity = '.5'
        startAgain.style.display = 'block'
    }

    function startNewGame() {

        feedbackMessage.innerHTML = `New game started! Enter a number between 1 and 100`
        input.removeAttribute('disabled')
        prevGuess = []
        remainingGuess.innerHTML = '10';
        previousGuesses.innerHTML = '';
        button.style.cursor = 'pointer'
        button.style.opacity = '1'
        input.style.borderColor = '#e2e8f0';
        noOfGuess = 0;
        previousGuesses.innerHTML = `<i>None Yet</i>`;
        randomNumber = Math.floor(Math.random() * 100 + 1);
        startAgain.style.display = 'none';
        feedbackMessage.style.backgroundColor = 'oklch(95.4% 0.038 75.164)';
        feedbackMessage.style.color = 'oklch(47% 0.157 37.304)';
        feedbackMessage.style.borderColor = 'oklch(90.1% 0.076 70.697)';
        totalGuess.innerHTML = '10'
    }

})


