"use strict";
// TODO: Implement the promptForBook function
function promptForBook() {
  // TODO: Prompt user for book details (title, author, publication year)
  var bookTitle = prompt("Book title:");
  var bookAuthor = prompt("Book author:");
  var bookPublicationYear = prompt("Book publication year:");
  if (
    bookTitle === null ||
    bookAuthor === null ||
    bookPublicationYear === null
  ) {
    return;
  }
  // TODO: Create an object of type 'Book' with the entered values
  var book = {
    title: bookTitle,
    author: bookAuthor,
    publicationYear: parseInt(bookPublicationYear),
  };
  return book;
}
// TODO: Call the promptForBook function to get the book details
var bookDetails = promptForBook();
// TODO: Display the details of the book object to the user
console.log("Book Details:");
console.log(
  "Title: ".concat(
    bookDetails === null || bookDetails === void 0 ? void 0 : bookDetails.title
  )
);
console.log(
  "Author: ".concat(
    bookDetails === null || bookDetails === void 0 ? void 0 : bookDetails.author
  )
);
console.log(
  "Publication Year: ".concat(
    bookDetails === null || bookDetails === void 0
      ? void 0
      : bookDetails.publicationYear
  )
);
