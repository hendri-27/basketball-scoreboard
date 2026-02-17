'use strict';

let homeScore = 0;
let guestScore = 0;
const homeScoreEl = document.getElementById('home-score');
const guestScoreEl = document.getElementById('guest-score');

function addScore(team, score) {
  if (team === 'home') {
    homeScore += score;
    homeScoreEl.textContent = homeScore;
  } else {
    guestScore += score;
    guestScoreEl.textContent = guestScore;
  }
}

function resetGame() {
  homeScore = 0;
  guestScore = 0;
  homeScoreEl.textContent = homeScore;
  guestScoreEl.textContent = guestScore;
}

// Expose functions to global scope for inline onclick handlers
window.addScore = addScore;
window.resetGame = resetGame;
