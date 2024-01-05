const Product = require('../models/product.model');
let product = [];
const Createproduct = async (req, res, next) => {
//   try {
//     const product = new Product(req.body);
//     await product.save();
//     return res.status(201).send(product);
//   } catch (err) {
//     return res.status(500).send(err);
//   }
return res.status(500).json({ });
};
const getProductById = async (req, res, next) => {
    return res.status(500).json({  });
    // try {
    //   // Access the product ID from query parameters
    //   const productId = req.query.id;
  
    //   // Perform your logic to fetch the product by ID
    //   const product = await Product.findById(productId);
  
    //   if (!product) {
    //     // If the product is not found, send an appropriate response
    //     return res.status(404).json({ error: 'Product not found' });
    //   }
  
    //   // If the product is found, send it in the response
    // return  res.status(200).json(product);
    // } catch (error) {
    //   // Handle any errors that occur during the process
    //   return res.status(500).json({ error: error.message });
    // }
  };
const getAllProducts = async (req, res, next) => {
    // try {
    //     const product =await Product.find();

    //     return res.status(201).json(product);
    //   } catch (error) {
    //     return  res.status(500).json({ error: error.message });
    //   }
    return res.status(500).json({  });
};
const updateProduct = async (req, res, next) => {
    // try {
    //     const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    //     return  res.status(200).json(product);
    //   } catch (error) {
    //     return     res.status(500).json({ error: error.message });
    //   }
    return res.status(500).json({});
};
const deleteProduct = async (req, res, next) => {
    // try {
    //     await Product.findByIdAndDelete(req.params.id);
    //     return  res.status(200).json({ message: "Product deleted successfully" });
    //   } catch (error) {
    //     return res.status(500).json({ error: error.message });
    //   }
    return res.status(500).json({  });
};
module.exports = { Createproduct, getProductById, getAllProducts, updateProduct, deleteProduct };