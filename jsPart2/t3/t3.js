'use strict';

const userNumbers = [];
const evenNumbers = [];

let num = prompt('Enter a number (or "end" to stop): ');

while (num !== 'end') {
  userNumbers.push(num);
  num = prompt('Enter a number (or "end" to stop): ');
}

for (const element of userNumbers) {
  if (element % 2 == 0) {
    evenNumbers.push(element);
  }
}

if (evenNumbers.length === 0) {
  evenNumbers.push('None');
}

document.getElementById('target').innerHTML = `Even numbers: ${evenNumbers}`;
