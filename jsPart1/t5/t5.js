'use strict';

// asking the user for a positive integer
const userInt = +prompt('Input a positive integer:');

let answer = 0;

// using for loop to get the wanted answer
for (let i = 1; i <= userInt; i++) {
  answer += i;
}

// giving the answer to the user in html
document.getElementById(
  'target'
).innerHTML = `The sum of all the natural numbers up to and including ${userInt} is ${answer}.`;
