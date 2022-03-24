'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1); // Random Number
let score = 20;

let displayMessage = function (location, message) {
  document.querySelector('.' + location).textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage('message', 'Start guessing...');
  displayMessage('score', score);
  displayMessage('number', '?');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // Other than number entered
    displayMessage('message', '😠 Not A Number!');
    if (score > 1) {
      score--;
      displayMessage('score', score);
    } else {
      displayMessage('message', '😢 You Lost The Game!');
      displayMessage('score', score);
    }
  } else if (guess === secretNumber) {
    // Entered Number match with secret number
    displayMessage('message', '🎉 Correct Number!');
    displayMessage('number', secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (Number(document.querySelector('.highscore').textContent) < score) {
      displayMessage('highscore', score);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        'message',
        guess > secretNumber ? '😉 Too High!' : '😜 Too Low!'
      );
      score--;
      displayMessage('score', score);
    } else {
      displayMessage('message', '😢 You Lost The Game!');
      displayMessage('score', 0);
    }
  }
});
