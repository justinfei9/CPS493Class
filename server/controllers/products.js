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
  .get("/", function (req, res) {
    res.send(model.getAll());
  })
  .get("/:id", function (req, res) {
    const id = parseInt(req.params.id, 10);
    const product = model.get(id);
    res.send(product);
  })
  .post("/", function (req, res) {
    console.log("POST request received");
    console.log("Request body:", req.body);
    const product = model.add(req.body);
    res.send(product);
  })
  .patch("/:id", function (req, res) {
    const id = parseInt(req.params.id, 10);
    const product = model.update(id, req.body);
    res.send(product);
  })
  .delete("/:id", function (req, res) {
    const id = req.params.id;
    const ret = model.remove(id);
    res.send(ret);
  });

module.exports = app; // Export the router
