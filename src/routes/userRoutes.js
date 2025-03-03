const express = require("express");
const { requireAuth } = require("../middleware/authMiddleware");
const router = express.Router();
const userController = require("../controllers/userController");

// ✅ Protect this route
router.get("/", requireAuth, userController.getAllUsers);

module.exports = router;
