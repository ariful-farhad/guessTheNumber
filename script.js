'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('h1').textContent = 'hello world';
document.querySelector('.number').textContent = 12;
document.querySelector('.guess').value = 14;
console.log(document.querySelector('.guess').value);
*/

// const setValue = function () {
//   if (Number(document.querySelector('.guess').textContent) > randomValue)
//     document.querySelector('.message').textContent = 'Too high!!!';
//   else if (Number(document.querySelector('.guess').textContent) < randomValue)
//     document.querySelector('.message').textContent = 'Too low!!!';
//   else {
//     document.querySelector('.message').textContent =
//       'Correct guess!! Congrats!!';
//     document.querySelector('.highscore').textContent = Number(
//       document.querySelector('.score').textContent
//     );
//   }
//   // console.log(document.querySelector('.score').textContent);
//   document.querySelector('.score').textContent =
//     Number(document.querySelector('.score').textContent) - 1;
//   document.querySelector('.highscore').textContent =
//     document.querySelector('.score').textContent;
// };
let randomValue = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highschore = 0;

function reset() {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
  randomValue = Math.floor(Math.random() * 20) + 1;
}

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  score = 20;
  document.querySelector('.score').textContent = score;
  randomValue = Math.floor(Math.random() * 20) + 1;
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number...';
  } else if (guess === randomValue) {
    document.querySelector('.message').textContent =
      'Congrats!! correct' + ' result';
    document.querySelector('body').style.backgroundColor = ' #60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = randomValue;
    if (score > highschore) {
      highschore = score;
    }
    document.querySelector('.highscore').textContent = highschore;
    //document.querySelector('.check').addEventListener('click', reset());
  } else if (guess < randomValue) {
    if (score > 1) {
      document.querySelector('.message').textContent = '!! too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!!!';
    }
  } else if (guess > randomValue) {
    if (score > 1) {
      document.querySelector('.message').textContent = '!! too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!!!';
    }
  }
});

// console.log(document.querySelector('.score').textContent);

// for (let i = 0; i < 20; i++) {
//   console.log(i);
//   if (i == randomValue) break;
// }
