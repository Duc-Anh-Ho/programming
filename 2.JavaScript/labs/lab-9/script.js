'use strict';
// Select Way 1: getElementById
// const score0Element = document.getElementById('score--0');
// const score1Element = document.getElementById('score--1');
// Select Way 2: querySelector
const score0Element = document.querySelector('#score--0');
const score1Element = document.querySelector('#score--1');
const diceElement = document.querySelector('.dice');
const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const current0Element = document.querySelector('#current--0');
const current1Element = document.querySelector('#current--1');
// Define Veriables
const score = [0, 0];
const winScore = 20;
let currentScore = 0; //Global because need to save
let activePlayer = 0;
let playing = true;
// Change player
const switchPlayer = function () {
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore; //current player
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle('player--active'); //toggle use like if? 1:0
  player1Element.classList.toggle('player--active'); //toggle use like if? 1:0
};
// Reset to begin
const resetBegin = function () {
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  current0Element.textContent = 0;
  current1Element.textContent = 0;
  diceElement.classList.add('hidden');
  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');
  player0Element.classList.add('player--active');
  player1Element.classList.remove('player--active');
};
resetBegin();
// When press New Game
buttonNew.addEventListener('click', function () {
  resetBegin();
  playing = true;
  currentScore = 0;
  activePlayer = 0;
  score[0] = 0;
  score[1] = 0;
});
// When click Rolling dice
buttonRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Random Dice
    const dice = Math.trunc(Math.random() * 6) + 1; //Not global cause need to reset when run
    // 2. Display Dice
    diceElement.classList.remove('hidden'); // Show Dice
    diceElement.src = `./dice-${dice}.png`; //Change Image of Dice
    // 3.1 Save Dice result to current
    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore; //current player
    }
    // 3.2 Change player
    else {
      switchPlayer();
    }
  }
});
// When click Hold
buttonHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add scrore to player's score
    score[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      score[activePlayer];
    // 2. Check winner
    if (score[activePlayer] >= winScore) {
      playing = false; //Stop play
      diceElement.classList.add('hidden'); // hide Dice again
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else switchPlayer();
  }
});
