const Express = require('express');
const productController = require('../controllers/product.controller');
var Router = Express.Router();

Router.get("/all",productController.getAllProducts)
Router.get("/",productController.getProductById)
Router.post("/",productController.Createproduct)
Router.patch("/",productController.updateProduct)
Router.delete("/:id",productController.deleteProduct)




module.exports = Router;