const { v4: uuid } = require("uuid");

const products = [];

class Product {
  constructor(title, imgUrl, description, price) {
    this.id = uuid();
    this.title = title;
    this.imgUrl = imgUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    products.push(this);
  }

  static fetchAll() {
    return products;
  }

  static findById(id) {
    const product = products.find((product) => product.id === id);
    return product;
  }

  static deleteById(id) {
    const index = this.getProductIndexById(id);
    if (index >= 0) {
      console.log("Deleted product", products.splice(index, 1)[0]);
    } else {
      console.log("No item found with name", id);
    }
  }

  static findByIdAndUpdate(id, newProduct) {
    const index = this.getProductIndexById(id);
    if (index >= 0) {
      console.log(`Updating product ${id}...`);
      const product = products[index];
      product.title = newProduct.title;
      product.imgUrl = newProduct.imgUrl;
      product.description = newProduct.description;
      product.price = newProduct.price;
      product[index] = product;
      return product;
    }
    return;
  }

  static getProductIndexById(id) {
    return products.findIndex((product) => product.id === id);
  }
}

module.exports = { Product };
