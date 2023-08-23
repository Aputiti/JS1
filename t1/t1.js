'use strict';

// take the user input
const degreesC = +prompt('Enter Celsius degrees:');

const degreesF = (degreesC * 9) / 5 + 32;
const degreesK = degreesC + 273.15;

const answer = `${degreesC} Celsius equals ${degreesF} Fahrenheit and ${degreesK} Kelvin.`;

//print it in html to be visible to the user
document.getElementById('target').innerHTML = answer;
