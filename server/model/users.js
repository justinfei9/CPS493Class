/**
 * type{{items: User[]}}
 */
const data = require("../data/users.json");

/**
 * @typedef {import("../../client/src/models/users").User} User
 */

/**
 * get all users
 * @returns {User[]}
 */
function getAll() {
  return data.items;
}

/**
 *
 * @param {number} id
 * @returns {User}
 */
function get(id) {
  return data.items.find((user) => user.id == id);
}

function add(user) {
  user.id = data.items.reduce((prev, x) => (x.id > prev ? x.id : prev), 0) + 1;
  data.items.push(user);
  return user;
}

/**
 *
 * @param {*} id
 * @param {*} user
 * @returns {User}
 */
function update(id, user) {
  const userToUpdate = get(id);
  Object.assign(userToUpdate, user);
  return userToUpdate;
}

function remove(id) {
  const userIndex = data.items.findIndex((user) => user.id == id);
  data.items.splice(userIndex, 1);
  return { success: true, message: "User deleted", id: id };
}

module.exports = {
  getAll,
  get,
  add,
  update,
  remove,
};
