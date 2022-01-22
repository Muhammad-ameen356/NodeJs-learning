const express = require('express');
const productController = require('../controllers/products')

const router = express.Router();

router.get('/', productController.fetchAll)

router.get('/form', productController.getAddProduct)

router.post('/form', productController.postAddProduct)

module.exports = router;