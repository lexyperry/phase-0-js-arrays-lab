// Write your code here
const products = ["Laptop", "Phone", "Headphones", "Monitor"];

function logFirstProduct() {
  console.log(products[0]);
}
function addProduct(productName) {
  products.push(productName);
}

function updateProductName(index, newName) {
  if (index >= 0 && index < products.length) {
    products[index] = newName;
  } else {
    console.log("Invalid index. No product updated.");
  }
}
function removeLastProduct() {
  products.pop();

}
// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
