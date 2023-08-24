'use strict';

// asking the user for their score for a course assessment
const userScore = +prompt('Input your course assessment score:');

let answer;

if (userScore >= 0 && userScore <= 39) {
  answer = 'Your grade is 0.';
} else if (userScore >= 40 && userScore <= 51) {
  answer = 'Your grade is 1.';
} else if (userScore >= 52 && userScore <= 63) {
  answer = 'Your grade is 2.';
} else if (userScore >= 64 && userScore <= 75) {
  answer = 'Your grade is 3.';
} else if (userScore >= 76 && userScore <= 87) {
  answer = 'Your grade is 4.';
} else if (userScore >= 88 && userScore <= 100) {
  answer = 'Your grade is 5.';
} else {
  answer = 'Something went wrong!';
}

// giving the answer to the user in html
document.getElementById('target').innerHTML = answer;
