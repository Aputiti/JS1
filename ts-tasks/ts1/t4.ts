export {}; // hack to ignore Book from task 3
// TODO Define the 'ElectronicDevice' interface (or type)
interface ElectronicDevice {
    type?: 'electro';
    brand: string;
    model: string;
}
// Define the 'Book' interface (or type)
interface Book {
    type?: 'book';
    title: string;
    author: string;
}

// Define the 'Product' type alias that can represent either 'ElectronicDevice' or 'Book'
type Product = ElectronicDevice | Book;

// Implement instances of the 'Product' type
function createElectronicDevice(): ElectronicDevice | null {
  // TODO: Prompt user for electronic device details (brand and model)
  const brand = prompt('Enter device brand:');
  const model = prompt('Enter device model:');

  if (brand === null || model === null) {
    return null;;
  }

  // TODO: return object containing brand and model
  const electronicDevice: ElectronicDevice = {
    brand,
    model,
  };

  return electronicDevice;
}

function createBook(): Book | null{
  // TODO: Prompt user for book details (title and author)
  const title = prompt('Enter book title:');
  const author = prompt('Enter book author:');

  if (title === null || author === null) {
    return null;;
  }

  // TODO: return object containing title and author

  const book: Book = {
    title,
    author,
  };

  return book;
}

// Create instances of 'Product'
const electronicProduct = createElectronicDevice();
const bookProduct = createBook();

// Display the details of each product
function displayProductDetails(product: Product) {
  console.log(`Product Type: ${product.type}`);
  if (product.type === 'electro') {
    console.log(`Brand: ${product.brand}`);
    console.log(`Model: ${product.model}`);
  } else if (product.type === 'book') {
    console.log(`Title: ${product.title}`);
    console.log(`Author: ${product.author}`);
  } else {
    console.log('Error l70');
  }
}

console.log('Electronic Device Details:');
displayProductDetails(electronicProduct!);

console.log();

console.log('Book Details:');
displayProductDetails(bookProduct!);