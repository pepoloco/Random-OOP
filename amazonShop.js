// Amazon shopping
const user = {
  name: "Pepo",
  active: true,
  cart: [],
  purchases: [],

  addItems(item, price) {
    const priceWithTax = { name: item, price: price + price * 0.03 };
    this.cart.push(priceWithTax);
  },
  buyItem() {
    this.purchases.push(...this.cart);
    this.cart = [];
  },
  emptyCart() {
    this.cart = [];
  },
  refundItem(item) {
    const x = this.purchases.findIndex((item) => item.name === item);
    if (x >= 0) {
      const refundItem = this.purchases.splice(index, 1)[0];
      const priceWithoutTax = refund.price / 1.03;
      this.cart.push({ name: refundItem.name, price: priceWithoutTax });
    }
  },
  getPurchaseHistory() {
    return this.purchases.map((item) => item.name);
  },
};
// Add items to cart
user.addItems("Ketchup", 10);
user.addItems("Tomato", 20);
user.addItems("Spagetthi", 30);

user.buyItem();

// Refund an item
user.refundItem("item 2");

// View purchase history
console.log(user.getPurchaseHistory()); // logs ['item 1', 'item 3']

// Empty cart
user.emptyCart();
console.log(user);

// Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart
