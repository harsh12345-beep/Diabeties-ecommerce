const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config(); // Load environment variables


const db = require("./src/config/db");
const bodyParser = require("body-parser");
const authRoutes = require("./src/routes/auth");
const productRoute = require("./src/routes/productRoute");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Routes
const userRoutes = require("./src/routes/userRoutes");
app.use("/users", userRoutes);

app.use("/api/products", productRoute);
app.use("/auth", authRoutes);


// Test Route
app.get("/", (req, res) => {
  res.send("Welcome to the E-Commerce API");
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
