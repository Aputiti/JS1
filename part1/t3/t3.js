'use strict';

// asking the user for lengths of three sides of a triangle
const s1 = +prompt('Input first triangles side length:');
const s2 = +prompt('Input second triangles side length:');
const s3 = +prompt('Input third triangles side length:');

let answer;

if (s1 === s2 && s1 === s3 && s1 !== null) {
  answer = 'The triangle is equilateral (all sides are equal).';
} else if (s1 === s2 || s1 === s3 || s2 === s3) {
  answer = 'The triangle is isosceles (two sides are equal).';
} else {
  answer = 'The triangle is scalene (no sides are equal).';
}

// giving the answer to the user in html
document.getElementById('target').innerHTML = answer;
