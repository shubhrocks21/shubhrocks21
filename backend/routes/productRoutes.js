const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// GET all products
router.get('/', productController.getAllProducts);

// Seed initial products
router.post('/seed', productController.seedProducts);

module.exports = router;
