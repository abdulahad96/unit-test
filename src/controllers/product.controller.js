const Product = require('../models/product.model');
const Createproduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
//     await product.save();
    return res.status(201).send(product);
  } catch (err) {
    return res.status(500).send(err);
  }
return res.status(500).json({ });
};
const getProductById = async (req, res, next) => {
    
    try {
     const productId = req.query.id;
    const product = await Product.findOne({where:{id : productId}});
  
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
    return  res.status(200).json(product);
    } catch (error) {
      // Handle any errors that occur during the process
      return res.status(500).json({ error: error.message });
    }
  };
const getAllProducts = async (req, res, next) => {
    try {
        const product =await Product.findAll();

        return res.status(201).json(product);
      } catch (error) {
        return  res.status(500).json({ error: error.message });
      }
    return res.status(500).json({  });
};
const updateProduct = async (req, res, next) => {
    try {
        const product = await Product.update(req.body,{where:{id:req.params.id}});
        return  res.status(200).json(product);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
};
const deleteProduct = async (req, res, next) => {
    try {
        console.log(req.params.id)
        await Product.destroy({where:{
            id:req.params.id
        }});
        return  res.status(200).json({ message: "Product deleted successfully" });
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
};
module.exports = { Createproduct, getProductById, getAllProducts, updateProduct, deleteProduct };