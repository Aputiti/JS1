'use strict';

// asking the user for the coordinate points
const xPoint1 = +prompt('Input first point x-coordinate:');
const yPoint1 = +prompt('Input first point y-coordinate:');
const xPoint2 = +prompt('Input second point x-coordinate:');
const yPoint2 = +prompt('Input first point y-coordinate:');

const distBetweenPoints = Math.sqrt(
  (xPoint2 - xPoint1) ** 2 + (yPoint2 - yPoint1) ** 2
);

// giving the answer to the user in html
document.getElementById(
  'target'
).innerHTML = `The distance between (${xPoint1}, ${yPoint1}) and (${xPoint2}, ${yPoint2}) is ${distBetweenPoints}`;
