const express = require("express");
const dotenv = require("dotenv");
const db = require("./src/config/db");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());

// Routes
const userRoutes = require("./src/routes/userRoutes");
app.use("/users", userRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Welcome to the E-Commerce API");
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
