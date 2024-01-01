var Express = require('express');
const Product = require('./product.route')
var router = Express.Router()
router.use('/product',Product)

module.exports = router;