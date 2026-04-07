const express = require('express');
const router = express.Router();
const {
    getAllProducts,
    getProductById,
    createProduct,
    deleteProduct
} = require('../controllers/productController');

// Define routes
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
