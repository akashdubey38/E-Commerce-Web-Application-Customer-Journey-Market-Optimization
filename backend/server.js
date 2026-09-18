 import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import paymentRoutes from "./routes/payment.js";

dotenv.config();

const app = express();

// CORS - Fix for Failed to fetch
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());

// Routes
app.use("/api/payment", paymentRoutes);

app.get("/", (req, res) => {
  res.send("API Running - Payment route active");
});

const PORT = 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB Error:", err.message);
    // Agar DB bhi fail ho to bhi server chalao taaki payment test ho jaye
    app.listen(PORT, () => {
      console.log(`Server running WITHOUT DB on port ${PORT}`);
    });
  });