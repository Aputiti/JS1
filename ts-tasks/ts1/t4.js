"use strict";
// Implement instances of the 'Product' type
function createElectronicDevice() {
  // TODO: Prompt user for electronic device details (brand and model)
  var brand = prompt("Enter device brand:");
  var model = prompt("Enter device model:");
  if (brand === null || model === null) {
    return null;
  }
  // TODO: return object containing brand and model
  var electronicDevice = {
    brand: brand,
    model: model,
  };
  return electronicDevice;
}
function createBook() {
  // TODO: Prompt user for book details (title and author)
  var title = prompt("Enter book title:");
  var author = prompt("Enter book author:");
  if (title === null || author === null) {
    return null;
  }
  // TODO: return object containing title and author
  var book = {
    title: title,
    author: author,
  };
  return book;
}
// Create instances of 'Product'
var electronicProduct = createElectronicDevice();
var bookProduct = createBook();
// Display the details of each product
function displayProductDetails(product) {
  console.log("Product Type: ".concat(product.type));
  if (product.type === "electro") {
    console.log("Brand: ".concat(product.brand));
    console.log("Model: ".concat(product.model));
  } else if (product.type === "book") {
    console.log("Title: ".concat(product.title));
    console.log("Author: ".concat(product.author));
  } else {
    console.log("Error l70");
  }
}
console.log("Electronic Device Details:");
displayProductDetails(electronicProduct);
console.log();
console.log("Book Details:");
displayProductDetails(bookProduct);
