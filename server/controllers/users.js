const model = require("../model/users");
const express = require("express");
const app = express.Router();

app
  .get("/", function (req, res) {
    res.send(model.getAll());
  })
  .get("/:id", function (req, res) {
    const id = parseInt(req.params.id, 10);
    const user = model.get(id);
    res.send(user);
  })
  .post("/", function (req, res) {
    const user = model.add(req.body);
    res.send(user);
  })
  .patch("/:id", function (req, res) {
    const id = parseInt(req.params.id, 10);
    const user = model.update(id, req.body);
    res.send(user);
  })
  .delete("/:id", function (req, res) {
    const id = req.params.id;
    const ret = mode.remove(id);
    res.send(ret);
  });

module.exports = app; // Export the router
