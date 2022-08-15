const { Product } = require("./product");

class Cart {
  static addProduct(product, items, quantity = 1) {
    const subTotal = quantity * product.price;
    items.products[product.id] = {
      product: product,
      quantity:
        ((items.products[product.id] && items.products[product.id].quantity) |
          0) +
        quantity,
      total:
        ((items.products[product.id] && items.products[product.id].total) | 0) +
        subTotal,
      price: product.price,
    };
  }

  static getCartItems() {
    return items;
  }

  static updateCartItem(id, items, quantity = 1) {
    if (items.products[id] && 0 <= quantity <= 10) {
      if (quantity == 0) {
        delete items.products[id];
      } else {
        items.products[id].total = items.products[id].price * quantity;
        items.products[id].quantity = quantity;
      }
    }
  }

  static deleteProductItem(id, items) {
    if (items.products[id]) {
      items.totalAmount -= items.products[id].total;
      delete items.products[id];
    }
  }

  static updateTotalAmount(totalAmount, subTotal) {
    return totalAmount + subTotal;
  }

  static getTotal(items, callback) {
    return Object.entries(items.products)
      .map(([key, value]) => callback(key, value))
      .reduce((preVal, curVal) => preVal + curVal, 0);
  }

  static updateCart(items, callback) {
    return Object.fromEntries(
      Object.entries(items.products).filter(([key]) => callback(key))
    );
  }
}

module.exports = { Cart };
