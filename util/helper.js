function filterObject(obj, callback) {
  return Object.fromEntries(
    Object.entries(obj.products).filter(([key]) => callback(key))
  );
}

function filteredCart(cart, callback) {
  Object.keys(cart)
    .filter((key) => callback(key))
    .reduce((obj, key) => {
      obj[key] = cart[key];
      return obj;
    }, {});
}

function getTotal(obj, callback) {
  return Object.fromEntries(
    Object.entries(obj.products).filter(([key, value]) => callback(key))
  );
}

module.exports = { filterObject, filteredCart };
