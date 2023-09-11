const Category = require('../models/category');

// Obtener todas las categorias
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Crear una nueva categoria
exports.createCategory = async (req, res) => {
  try {
    const { name, type, brand } = req.body;
    const category = await Category.create({ name, type, brand });
    res.status(201).json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Actualizar una categoria existente
exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, type, brand } = req.body;
    const updatedCategory = await Category.update(
      { name, type, brand },
      { where: { id } }
    );
    if (updatedCategory[0] === 1) {
      res.json({ message: 'Category updated successfully' });
    } else {
      res.status(404).json({ message: 'Category not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Eliminar un producto
exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCategory = await Category.destroy({ where: { id } });
    if (deletedCategory) {
      res.json({ message: 'Category deleted successfully' });
    } else {
      res.status(404).json({ message: 'Category not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
