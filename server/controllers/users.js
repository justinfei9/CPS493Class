const data = require("../data/users.json");
const express = require("express");
const app = express.Router();

app
  .get("/", function (req, res) {
    res.send(data.items);
  })
  .get("/:id", function (req, res) {
    const id = parseInt(req.params.id, 10);
    const user = data.items.find((user) => user.id === id);
    res.send(user);
  })
  .post("/", function (req, res) {
    const user = req.body;
    user.id =
      data.items.reduce((prev, x) => (x.id > prev ? x.id : prev), 0) + 1;
    data.items.push(user);
    res.send(user);
  })
  .patch("/:id", function (req, res) {
    const id = parseInt(req.params.id, 10);
    const user = data.items.find((user) => user.id === id);
    if (user) {
      Object.assign(user, req.body);
      res.send(user);
    } else {
      res.status(404).send({ error: "User not found" });
    }
  })
  .delete("/:id", function (req, res) {
    const id = parseInt(req.params.id, 10);
    const index = data.items.findIndex((user) => user.id === id);
    if (index !== -1) {
      data.items.splice(index, 1);
      res.send(data.items);
    } else {
      res.status(404).send({ error: "User not found" });
    }
  });

module.exports = app; // Export the router
