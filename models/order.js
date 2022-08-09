class Order {
  #total = 0;
  orderDate = Date.now();

  constructor(title, price, quantity) {
    this.#title = title;
    this.#price = price;
    this.#quantity = quantity;
  }

  calculateOrder() {}
}
