const express = require("express");
const app = express();
const userController = require("./controllers/users");
const productController = require("./controllers/products");

const port = 3000;

//middleware
app.use(express.json());
app.use(express.static(__dirname + "/public"));

//controllers
app
  .get("/", function (req, res) {
    res.send("Hello World");
  })
  .get("/about", function (req, res) {
    res.send("About Us");
  })
  .use("/users", userController)
  .use("/products", productController);

app.listen(port, function () {
  console.log("Server is running on http://localhost:" + port);
});
