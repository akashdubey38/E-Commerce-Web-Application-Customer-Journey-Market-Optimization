const express = require('express');
const Product = require('../models/product');
const router = express.Router();

router.get('/', async (req,res) => {
  try{
    const products = await Product.find();
    res.json(products);
  }catch(err){
    res.status(500).json({error: err.message})
  }
});

router.post('/seed', async (req,res) => {
  try{
    await Product.deleteMany();
    await Product.insertMany([
      {name: "Wireless Headphones", price: 2999, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e", desc: "High bass sound"},
      {name: "Nike Running Shoes", price: 4999, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff", desc: "Lightweight shoes"},
      {name: "Smart Watch", price: 3999, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30", desc: "Fitness tracking"},
      {name: "DSLR Camera", price: 45999, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32", desc: "4K Video"},
    ]);
    res.json({msg: "Products added"});
  }catch(err){
    res.status(500).json({error: err.message})
  }
});

module.exports = router;