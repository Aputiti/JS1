'use strict';

const arrayToSort = [6, 10, 3, 5, 100, 18];

function sortArray(array) {
  array.sort(function (a, b) {
    return a - b;
  });

  return array;
}

console.log(arrayToSort);
console.log(sortArray(arrayToSort));
