const mongoose = require("mongoose");

// Create a Mongoose schema for products
const productSchema = new mongoose.Schema({
    name: {
      type: String, 
      required: true 
    },
    unitPrice: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      // required: true,
    },
    description:{
      type: String,
      // required: true,
    },
    images: [String],
    category: String,
    addedBy: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref:'User', 
      required: true },
    dateAdded: {
      type: Date,
      default: Date.now,
    },

});
  
productSchema.set("toJSON",
{
  transform: (_, obj) => {
    obj.id = obj._id;
    delete obj._id;
    delete obj.__v;

  },
})

  // Create a Mongoose model for products
  const Product = mongoose.model('Product', productSchema);

  module.exports = Product;