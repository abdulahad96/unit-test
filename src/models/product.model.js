const mongoose = require('mongoose');
const { DataTypes, Sequelize } = require('sequelize');
const { sequelize } = require('../db');

const Product = sequelize.define('Product', {
  name: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
}, {
  tableName: 'Product' // Explicitly set the table name
});
// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   price: { type: String },
//   description: {type: String}
//   });

  
  module.exports = Product;