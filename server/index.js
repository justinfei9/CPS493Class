const express = require("express");
const app = express();
const userController = require("./controllers/users");

const port = 3000;

app
  .get("/", function (req, res) {
    res.send("Hello World");
  })
  .get("/about", function (req, res) {
    res.send("About Us");
  })
  .use("/users", userController);

app.listen(port, function () {
  console.log("Server is running on http://localhost:" + port);
});
