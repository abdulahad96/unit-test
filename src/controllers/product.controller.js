const Product = require('../models/product.model');

const Createproduct = async (req, res, next) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send(product);
  } catch (err) {
    res.status(500).send(err);
  }
};
const getProductById = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};
const getAllProducts = async (req, res, next) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};
const updateProduct = async (req, res, next) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(product);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};
const deleteProduct = async (req, res, next) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Product deleted successfully" });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};
module.exports = { Createproduct, getProductById, getAllProducts, updateProduct, deleteProduct };