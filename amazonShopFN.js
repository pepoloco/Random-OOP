const user = {
  name: "Pepo",
  active: true,
  cart: [],
  purchases: [],
};

let history = [];
const composeF =
  (f, g) =>
  (...arguments) =>
    f(g(...arguments));

purchaseItem(
  addItemToCart,
  applyTax,
  buyItem,
  emptyCart
)(user, { name: "laptop", price: 200 });

function purchaseItem(...fns) {
  return fns.reduce(composeF);
}

function addItemToCart(user, item) {
  history.push(user);
  const updatedCart = user.cart.concat(item);
  return Object.assign({}, user, { cart: updatedCart });
}

function applyTax(user) {
  history.push(user);
  const { cart } = user;
  const taxRate = 1.03;
  const updatedCart = cart.map((item) => {
    return {
      name: item.name,
      price: item.price * taxRate,
    };
  });
  return Object.assign({}, user, { cart: updatedCart });
}

function buyItem(user) {
  history.push(user);
  return Object.assign({}, user, { purchases: user.cart });
}

function emptyCart(user) {
  history.push(user);
  return Object.assign({}, user, { cart: [] });
}

history
