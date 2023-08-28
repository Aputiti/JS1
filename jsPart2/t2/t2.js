'use strict';

const numbers = [];

for (let i = 0; i < 5; i++) {
  numbers.push(+prompt(`Type ${i + 1}. number:`));
}

console.log('Numbers array created: ' + JSON.stringify(numbers));

const checkNum = +prompt('Search for a number: ');

if (numbers.includes(checkNum)) {
  console.log(`Number ${checkNum} is in the array!`);
} else {
  console.log(`Number ${checkNum} is not in the array!`);
}

numbers.pop();

console.log('Numbers array updated: ' + JSON.stringify(numbers));

numbers.sort(function (a, b) {
  return a - b;
});

console.log('Numbers array sorted: ' + JSON.stringify(numbers));
