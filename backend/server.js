 const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ecommerce')
.then(()=> console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);
const productRoutes = require('./routes/product');
app.use('/api/products', productRoutes);
app.get("/", (req, res) => {
  res.send("E-commerce API Running - Akash");
});

app.listen(5000, () => {
  console.log("Backend chal gaya 5000 pe");
});