// TODO: Implement the squareRoot function
// parameter num should be a number or null or undefined and the function shoud return a number or a string
function squareRoot(num) {
    // TODO: Check if the input is undefined or null. If fail, return 'Input is undefined or null.'
    if (num === null || num === undefined) {
        return 'Input is undefined or null.';
    }
    // TODO: Check if the input is a valid number. If fail, return 'Invalid input. Please enter a valid number.'
    if (typeof num !== 'number' || isNaN(num)) {
        return 'Invalid input. Please enter a valid number';
    }
    // TODO: Handle cases where the input is negative. If fail, return 'Cannot calculate square root of a negative number.'
    if (num < 0) {
        return 'Cannot calculate square root of a negatice number.';
    }
    // Calculate the square root and return the result
    var sqrt = Math.sqrt(num);
    return sqrt;
}
// Prompt the user to enter a number
var userInput = prompt('Enter a number:');
// Convert user input to a number or keep it undefined if empty
// TODO: replce x and y with proper types
var numberInput = userInput ? parseFloat(userInput) : undefined;
// Call the squareRoot function and display the result
var result = squareRoot(numberInput);
console.log(result);
