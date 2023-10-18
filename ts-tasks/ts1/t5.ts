// TODO: Implement the lengthOrSquare function
// define the type(s) for 'value'
function lengthOrSquare(value: string | number) {
    // TODO: Use a type guard to check the actual type of 'value'
    // if type is string, retrurn the length of the string
    // if type is number return the square of the number
    if (typeof value === 'string') {
        return value.length;
    } else {
        return value**2;
    } 
}

// Prompt the user to enter a value as either a string or a number
const userrInput = prompt('Enter a value either as a string or a number:')!;
/* TODO: If userInput is numeric, convert it to number else keep it as string */
const parsedValue = userrInput !== null && !isNaN(parseFloat(userrInput))
? parseFloat(userrInput) // Convert to a number if it's numeric
: userrInput!;   // Keep it as a string   



// Call the lengthOrSquare function
const resultt = lengthOrSquare(parsedValue);
console.log(typeof resultt);
console.log(resultt);
