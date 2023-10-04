const Product = require('../models/productModel');
const User = require("../models/userModel");

// Set up routes for products

// Add products (logged in users only)
const addItem = (req, res) => {
    try {
    const product = new Product(req.body);
    product.save();
    res.status(201).json({product});
    } catch (err) {
        res.status(500).send(err);
    }
};

// GET all products
const getItems = async (req, res, next) => {
    try {
    const products = await Product.find();
     res.send(products);
    } catch (err) {
    next(err);
     }
};
  
// GET a product by ID
const  getItemById = async (req, res, next) => {
  try{
     const product = await Product.findById(req.params.id);
      if (product) { res.send(product); }
  } catch (err) {
       next(err); 
}
};
  
// DELETE a product by ID (logged in users only)
// const deleteItem = async (req, res, next) => {
//   try{
//       const product = await Product.findByIdAndDelete(req.params.id);
//       if (product) { res.send("Product Deleted"); 
//       res.status(404).send("Product not found");
//     }
//   } catch (err) {
//        next(err);
//   }
// };

// DELETE a product by ID (logged in users and owners of the product only)
const deleteItem = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const userId = req.user._id;

    const product = await Product.findOne({ _id: productId, addedBy: userId });

    if (!product) {
      return res.status(404).send("Product not found or unauthorized to delete.");
    }

    await Product.deleteOne({ _id: productId });
    res.send("Product Deleted");
  } catch (err) {
    next(err);
  }
};


// EDIT a product by ID (logged in users only)
// const editItem = async (req, res, next) => {
//     try {
//      const product = await Product.findByIdAndUpdate(req.params.id, req.body);
//       res.send(product);
//     } catch (err) {
//       if (err) {
//          next(err);
//         } else if (!product) {
//           res.status(404).send('Product not found');
//         } 
//       }
// };

// Edit a product by ID (logged in users and owners of the product only)
const editItem = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const userId = req.user._id;

    const product = await Product.findOne({ _id: productId, addedBy: userId });

    if (!product) {
      return res.status(404).send("Product not found or unauthorized to edit.");
    }

    product.set(req.body);
    const updatedProduct = await product.save();

    res.send(updatedProduct);
  } catch (err) {
    next(err);
  }
};


module.exports = {
    getItems, 
    getItemById, 
    deleteItem,
    addItem, 
    editItem, 
}