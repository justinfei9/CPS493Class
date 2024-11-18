const model = require("../model/users");
const express = require("express");
const app = express.Router();

app
  .get("/", function (req, res, next) {
    model
      .getAll()
      .then((x) => res.send(x))
      .catch(next);
  })
  .get("/:id", function (req, res, next) {
    model
      .add(req.body)
      .then((x) => res.send(x))
      .catch(next);
  })
  .post("/", function (req, res, next) {
    const user = model.add(req.body);
    res.send(user);
  })
  .patch("/:id", function (req, res, next) {
    const id = parseInt(req.params.id, 10);
    model
      .update(+id, req.body)
      .then((x) => res.send(x))
      .catch(next);
  })
  .delete("/:id", function (req, res, next) {
    const id = req.params.id;
    model
      .remove(+id)
      .then((x) => res.send(x))
      .catch(next);
  });

module.exports = app; // Export the router
