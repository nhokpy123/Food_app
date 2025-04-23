const express = require('express');
const router = express.Router();
// const productController = require('../controllers/productController');
const ProductController = require('../controllers/productController');
// // test
// router.get('/testpopular', productController.getPopularProducts);
// //lay du lieu popular tu datadb
// router.get('/popularrr', productController.getPopulartions);

//api
// Create a product
router.post('/createpopular', ProductController.createProduct);

// Get all products
router.get('/allpopular', ProductController.getAllProducts);

// Get product by ID
router.get('/getbyidpopular/:id', ProductController.getProductById);

// Update a product
router.put('/updatebyidpopular/:id', ProductController.updateProduct);

// Delete a product
router.delete('/deletepopular/:id', ProductController.deleteProduct);

module.exports = router;
