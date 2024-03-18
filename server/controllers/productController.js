const productModel = require("../models/productModel");

async function getProducts(req, res) {
  let products = await productModel.find({});
  res.json({ products });
}

async function postProduct(req, res) {
  console.log(req.body);
  let product = await productModel.create(req.body);
  res.json({ status: "success", product });
}

async function getProductById(req, res) {
  let product = await productModel.findById(req.params.id);
  res.json({ product });
}

async function updateProductById(req, res) {
  let product = await productModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json({ product });
}

async function deleteProductById(req, res) {
  let product = await productModel.findByIdAndDelete(req.params.id, req.body, {
    new: true,
  });
  res.status(201).json({ status: "Success" });
}

module.exports = {
  getProducts,
  postProduct,
  getProductById,
  updateProductById,
  deleteProductById,
};
