"use strict";

let player0 = document.querySelector(".player--0");
let player1 = document.querySelector(".player--1");
let score1 = document.querySelector("#score--0");

let score2 = document.getElementById("score--1");
let current0 = document.getElementById("current--0");
let current1 = document.getElementById("current--1");
let dice1 = document.querySelector(".dice");
let btnNew = document.querySelector(".btn--new");
let btnRoll = document.querySelector(".btn--roll");
let btnHold = document.querySelector(".btn--hold");
let scores, currentScore, activePlayer, playing;
const newG = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score1.textContent = 0;
  score2.textContent = 0;
  dice1.classList.add("hidden");
  current0.textContent = 0;
  current1.textContent = 0;
  player0.classList.remove("player--winnr");
  player1.classList.remove("player--winnr");
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
};
newG();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function () {
  if (playing) {
    let dice = Math.trunc(Math.random() * 6) + 1;
    dice1.classList.remove("hidden");
    dice1.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});
btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});
btnNew.addEventListener("click", function () {
  newG();
});
