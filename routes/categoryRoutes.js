const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Rutas para categorias
router.get('/categories', categoryController.getAllCategories);
router.post('/categories', categoryController.createCategory);
router.put('/categories/:id', categoryController.updateCategory);
router.delete('/categories/:id', categoryController.deleteCategory);

module.exports = router;
