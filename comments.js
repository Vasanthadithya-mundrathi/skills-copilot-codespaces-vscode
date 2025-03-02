// Create web server with Express.js
// Run the server with Node.js
// Open the browser and go to http://localhost:3000/comments
// You should see the comments data displayed as JSON in the browser

const express = require("express");
const app = express();
const comments = require("./data/comments");
const products = require("./data/products");

app.get("/comments", (req, res) => {
  res.json(comments);
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:productId", (req, res) => {
  const productId = req.params.productId;
  const product = products.find((product) => product._id === productId);
  res.json(product);
});

app.get("/comments", (req, res) => {
  res.json(comments);
});

app.get("/comments/:commentId", (req, res) => {
  const commentId = req.params.commentId;
  const comment = comments.find((comment) => comment._id === commentId);
  res.json(comment);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
