 require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// CORS - Vercel ke liye fixed
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend chal gaya ${PORT} pe`);
});