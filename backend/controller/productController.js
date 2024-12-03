const Product = require('../models/product');

// Fetch all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Seed initial products (for testing purposes)
exports.seedProducts = async (req, res) => {
  try {
    const initialProducts = [
      {
        name: 'Creative Notebook',
        price: 15.99,
        description: 'A beautifully designed notebook for your creative ideas.',
        image: 'assets/product1.jpg',
        category: 'Stationery'
      },
      {
        name: 'Custom Pen Set',
        price: 9.99,
        description: 'A set of custom pens with smooth ink flow.',
        image: 'assets/product2.jpg',
        category: 'Stationery'
      },
      {
        name: 'Handmade Greeting Cards',
        price: 12.99,
        description: 'Handmade cards for special occasions.',
        image: 'assets/product3.jpg',
        category: 'Gifts'
      }
    ];
    await Product.insertMany(initialProducts);
    res.json({ message: 'Products seeded successfully.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
