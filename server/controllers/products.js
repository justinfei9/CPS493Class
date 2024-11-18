const model = require("../model/products");
const express = require("express");
const app = express.Router();

/* Four Ways to send data to the server
1. Query Parameters
2. Path Parameters
3. Headers
4. Body
*/
app
  .get("/", function (req, res, next) {
    model
      .getAll()
      .then((x) => res.send(x))
      .catch(next);
  })
  .get("/:id", function (req, res, next) {
    const id = parseInt(req.params.id, 10);
    model
      .get(+id)
      .then((x) => res.send(x))
      .catch(next);
  })
  .post("/", function (req, res, next) {
    model
      .add(req.body)
      .then((x) => res.send(x))
      .catch(next);
  })
  .patch("/:id", function (req, res, next) {
    const id = parseInt(req.params.id, 10);
    model
      .update(+id, req.body)
      .then((x) => res.send(x))
      .catch(next);
  })
  .delete("/:id", function (req, res, next) {
    const id = parseInt(req.params.id, 10);
    model
      .remove(+id)
      .then((x) => res.send(x))
      .catch(next);
  });

module.exports = app; // Export the router
