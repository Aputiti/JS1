'use strict';

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
const vegetables = [];

console.log('Fruits: ' + JSON.stringify(fruits));
console.log(`Length of Fruits: ${fruits.length}`);
console.log(`Fruits Index 2: ${fruits[2]}`);
console.log(`Last Fruits element: ${fruits[fruits.length - 1]}`);

const veg1 = prompt('Type a vegetable:');
const veg2 = prompt('Type another vegetable:');
const veg3 = prompt('Type one more vegetable:');

vegetables.push(veg1, veg2, veg3);

console.log('Vegetables: ' + JSON.stringify(vegetables));
console.log('Length of Vegetables: ' + vegetables.length);
