/**
 * type{{items: Product[]}}
 */
const data = require("../data/Products.json");

/**
 * @typedef {import("../../client/src/models/products").Product} Product
 */

/**
 * get all Products
 * @returns {import("../../client/src/models/products").Product[]}
 */
function getAll() {
  return data.items;
}

/**
 *
 * @returns {Product}
 */
function get(id) {
  return data.items.find((Product) => Product.id == id);
}

function add(Product) {
  Product.id =
    data.items.reduce((prev, x) => (x.id > prev ? x.id : prev), 0) + 1;
  data.items.push(Product);
  return Product;
}

/**
 *
 * @param {number} id
 * @param {Product} Product
 * @returns {Product}
 */
function update(id, Product) {
  const ProductToUpdate = get(id);
  Object.assign(ProductToUpdate, Product);
  return ProductToUpdate;
}

function remove(id) {
  const ProductIndex = data.items.findIndex((Product) => Product.id == id);
  data.items.splice(ProductIndex, 1);
  return { success: true, message: "Product deleted", id: id };
}

module.exports = {
  getAll,
  get,
  add,
  update,
  remove,
};
