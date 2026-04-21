const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

let employees = [];
let products = [];

// ===== EMPLOYEE =====
app.get("/employee", (req, res) => {
  res.json(employees);
});

app.post("/employee", (req, res) => {
  employees.push(req.body);
  res.send("Employee Added");
});

app.delete("/employee/:id", (req, res) => {
  employees.splice(req.params.id, 1);
  res.send("Employee Deleted");
});

app.put("/employee/:id", (req, res) => {
  employees[req.params.id] = req.body;
  res.send("Employee Updated");
});

// ===== PRODUCT =====
app.get("/product", (req, res) => {
  res.json(products);
});

app.post("/product", (req, res) => {
  products.push(req.body);
  res.send("Product Added");
});

app.delete("/product/:id", (req, res) => {
  products.splice(req.params.id, 1);
  res.send("Product Deleted");
});

app.put("/product/:id", (req, res) => {
  products[req.params.id] = req.body;
  res.send("Product Updated");
});

app.listen(PORT, () => {
  console.log("Server running on http://localhost:3000");
});