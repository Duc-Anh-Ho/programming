'use strict';

const maxScore = 30;
const randomNumber = Math.trunc(Math.random() * maxScore) + 1; //M in Math have to be upper case
let secretNumber = randomNumber;
let score = maxScore;
let highScore = 0;

//Add max score (optional)
document.querySelector('.between').textContent = `(Between 1 and ${maxScore})`;

//DRY
const displayMessage = message =>
  (document.querySelector('.message').textContent = message);
const backGroundColor = color =>
  (document.querySelector('body').style.backgroundColor = color);
const guessValue = value => (document.querySelector('.guess').value = value);
const numberMessage = message =>
  (document.querySelector('.number').textContent = message);
const scoreValue = value =>
  (document.querySelector('.score').textContent = value);
const highScoreValue = value =>
  (document.querySelector('.highscore').textContent = value);

//Click Again Button Event (Lab-10)
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = randomNumber;
  score = maxScore;
  backGroundColor('black');
  displayMessage('Start Guessing...');
  guessValue('');
  numberMessage('?');
  scoreValue(maxScore);
});

//Click Check Button Event
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // Test Value
  console.log(guess, typeof guess);
  //When guess == 0 or string
  if (!guess) displayMessage('⛔ No Number!');
  //When Correct Number
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    backGroundColor('green');
    numberMessage(secretNumber);
    //Update Highscore
    if (score > highScore) highScore = score;
    highScoreValue(highScore);
    //When wrong number
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
    score--;
    scoreValue(score);
  }
  //When guess too much
  if (!(score > 0)) {
    displayMessage('You lose the game!');
    backGroundColor('red');
    scoreValue(0);
  }
});
