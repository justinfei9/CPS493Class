const data = require("../data/users.json");

function getAll(req, res) {
  res.send(data.items);
}
function get(id) {
  return data.items.find((user) => user.id === id);
}
function add(user) {
  user.id = data.items.reduce((prev, x) => (x.id > prev ? x.id : prev), 0) + 1;
  data.items.push(user);
  return user;
}
function update(id, user) {
  const userToUpdate = data.items.find((user) => user.id === id);
  Object.assign(userToUpdate, user);
  return userToUpdate;
}

function remove(id) {
  const index = data.items.findIndex((user) => user.id === id);
  if (index !== -1) {
    data.items.splice(index, 1);
  }
  return data.items;
}

module.exports = {
  getAll,
  get,
  add,
  update,
  remove,
};
