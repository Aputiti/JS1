'use strict';

const arrayToSort = [6, 10, 3, 5, 100, 18];

function sortArray(array, string) {
  if (string === 'asc') {
    array.sort(function (a, b) {
      return a - b;
    });
  } else if (string === 'desc') {
    array.sort(function (a, b) {
      return b - a;
    });
  } else {
    return 'Something went wrong!';
  }
  return array;
}

console.log(sortArray(arrayToSort, 'asc'));
console.log(sortArray(arrayToSort, 'desc'));
