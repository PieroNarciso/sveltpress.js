import express from "express";
import UIPress from "uipress";

const app = express();

const PORT = 3000;

app.get("/message", (_, res) => {
  res.send("Hello World!");
});

app.get("/api/products", (_, res) => {
  res.json([
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
    { id: 4, name: "Product 4", price: 400 },
    { id: 5, name: "Product 5", price: 500 },
  ]);
});


UIPress.listen(app, PORT, () => console.log(`Server running on port ${PORT}`));
