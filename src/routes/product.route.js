const Express = require('express');
const productController = require('../controllers/product.controller');
var Router = Express.Router();

Router.get("/",productController.getAllProducts)
Router.get("/",productController.getProductById)
Router.post("/",productController.Createproduct)
Router.patch("/",productController.updateProduct)
Router.delete("/",productController.deleteProduct)




module.exports = Router;