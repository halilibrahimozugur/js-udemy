'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 45;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 7;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'Lütfen Sayı Giriniz';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Tutturdunuz BRAVO!';
    score++;
    document.querySelector('.score').textContent = score;
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Biraz daha azalt :)';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Kaybettin, baştan başla';
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Biraz daha yükselt :)';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Kaybettin, baştan başla';
    }
  }
});
