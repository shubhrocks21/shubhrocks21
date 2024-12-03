const Product = require('../models/product');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.seedProducts = async (req, res) => {
  try {
    const initialProducts = [
      { name: 'Creative Notebook', price: 15.99, description: 'A creative notebook.', image: 'assets/product1.jpg', category: 'Stationery' },
      { name: 'Custom Pen Set', price: 9.99, description: 'A custom pen set.', image: 'assets/product2.jpg', category: 'Stationery' },
      { name: 'Handmade Greeting Cards', price: 12.99, description: 'Handmade cards.', image: 'assets/product3.jpg', category: 'Gifts' }
    ];
    await Product.insertMany(initialProducts);
    res.json({ message: 'Products seeded successfully.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
