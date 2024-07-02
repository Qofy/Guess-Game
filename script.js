'use strict';
const check = document.querySelector('.check');
let message = document.querySelector('.message');
const number = document.querySelector('.number');
const scores = document.querySelector('.score');
const highscore = document.querySelector('.highscore')
const again = document.querySelector('.again');

let secretNumber = Math.trunc(Math.random() * 20) +1;
console.log(secretNumber)
let score = 20;
let highScore = 0;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}
check.addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess)

  if (!guess){
    message.textContent = '⛔️ No number!'
  }else if (guess === secretNumber){
    //message.textContent = '🎉 Correct Number!'
    displayMessage('🎉 Correct Number!')
    document.querySelector('body').style.backgroundColor = '#60b347'
    number.textContent = secretNumber
    if(score > highScore){
      highScore === score
      highscore.textContent = score
    } 
  }else if (guess !== secretNumber){
    if (score > 1){
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!')
    }
    score--;
    scores.textContent = score;
  }else{
    displayMessage ('💥 You lost the game!');
    scores.textContent = 0
  }
});

again.addEventListener('click', function(){
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage ('Start guessing...')
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
});