const express = require("express");
const { products } = require("../utils/data");
const {
  addProductValidator,
  updateProductValidator,
} = require("../validators/product");

const productsRouter = express.Router();

productsRouter.get("/products", (req, res) => {
  res.status(200).json({
    status: "success",
    data: products,
  });
});

productsRouter.post("/products", addProductValidator, (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.status(201).json({
    status: "success",
    data: newProduct,
  });
});

productsRouter.put("/products/:id", updateProductValidator, (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const index = products.findIndex((product) => product.id === Number(id));

  // Handle the case where the product is not found
  if (index === -1) {
    res.status(404).json({
      status: "error",
      message: "Product not found",
    });
    return;
  }

  products[index] = { ...products[index], ...data };
  const updatedProduct = products[index];
  res.status(200).json({
    status: "success",
    data: updatedProduct,
  });
});

productsRouter.delete("/products/:id", (req, res) => {
  const id = req.params.id;
  const index = products.findIndex((product) => product.id === Number(id));

  // Handle the case where the product is not found
  if (index === -1) {
    res.status(404).json({
      status: "error",
      message: "Product not found",
    });
    return;
  }

  products.splice(index, 1);
  res.status(204).json();
});

module.exports = productsRouter;
