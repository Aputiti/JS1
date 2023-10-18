// Create an empty array named 'cart' to store the items
var cart = [];
// TODO: Implement a loop to prompt the user for item details
// Use 'while' loop to keep prompting until an empty item name is entered
while (true) {
    // TODO: Prompt user for item name, price, and quantity
    var itemName = prompt('Enter an item name:');
    // Break the loop if an empty item name is entered
    if (itemName === "") {
        break;
    }
    var itemPrice = parseInt(prompt('Enter the price:'));
    var itemQuantity = parseInt(prompt('Enter the quantity:'));
    // Create an item object and add it to the 'cart' array
    var newItem = { name: itemName, price: itemPrice, quantity: itemQuantity };
    cart.push(newItem);
}
// Calculate the total cost using the 'map' and 'reduce' functions
var totalCost = cart.map(function (item) { return item.price * item.quantity; }).reduce(function (sum, cost) { return sum + cost; }, 0);
// Display the total cost to the user
console.log("Total cost of the shopping cart: $".concat(totalCost.toFixed(2)));
