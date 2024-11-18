const express = require("express");
const app = express();
const userController = require("./controllers/users");
const productController = require("./controllers/products");

const port = 3000;

const file = require("fs");
//why did moshe delete code this to delete this, idk
/*file.readFile("./data/products.json", (err, data) => {
  if (err) {
    console.error(err);

  }else{
    console.log("File Read Successfully");
  }
  console.log(data);
});*/

//middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use(express.json());
app.use(express.static(__dirname + "/dist"));

//controllers
app
  .get("/", (req, res, next) => {
    res.send("Hello World");
  })
  .get("/about", (req, res) => {
    res.send("About Us");
  })
  .use("/api/v1/users", userController)
  .use("/api/v1/products", productController)
  .get("*", (req, res, next) => {
    res.sendFile(__dirname + "/dist/index.html");
  });

// Error Handling
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status ?? 500).send(err);
});

//node style callback here
console.log("step 1");
app.listen(port, (err, data, next) => {
  console.log("step 2");
  console.log("Server is running on http://localhost:" + port);
});
console.log("step 3");

/* Four types of async methids
1. Callbacks
2. Promises
3. Async/Await
4. Pipelines
*/
