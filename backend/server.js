 require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// 1. CORS FIX - Vercel ke liye
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.options("*", cors());

app.use(express.json());

// 2. MongoDB connect
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ecommerce')
.then(()=> console.log("MongoDB Connected"))
.catch(err => console.log(err));

// 3. Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const productRoutes = require('./routes/product');
app.use('/api/products', productRoutes);

app.get("/", (req, res) => {
  res.send("E-commerce API Running - Akash");
});

// 4. Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend chal gaya ${PORT} pe`);
});