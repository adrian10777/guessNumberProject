'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; //state variable. score apart of app state
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//math is obj js gives us, random is a method part of math obj

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  //when there is no input
  if (!guess) {
    displayMessage('No number!');
    //correct input
  } else if (guess === secretNumber) {
    displayMessage('Correct NUmber!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //wrong guess
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber
          ? 'Your guess is too high!'
          : ' your guess is to low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
        displayMessage('You Lost the game.');
        document.querySelector('.score').textContent = 0;
    }
  }



document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start Guessing!';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
})
//function is called by js engine as soon as event happens
