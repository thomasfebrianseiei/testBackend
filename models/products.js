const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  stock: {
    type:Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
   price: {
    type: Number,
    required: true
  },
  pictures: [{ type: Schema.Types.ObjectId, ref: "picture" }],
  date: {
    type: Date,
    default: Date.now
  }
});

const Product = mongoose.model("products", productsSchema);

module.exports = Product;
